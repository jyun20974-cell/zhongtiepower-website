/**
 * 中铁电气集团外贸独立站 - 每日自动备份脚本
 * 
 * 功能：
 * 1. 备份数据库文件
 * 2. 备份上传文件
 * 3. 按日期命名备份目录
 * 4. 自动清理30天前的旧备份
 * 5. 记录日志到 backup.log
 * 6. 完成后显示桌面通知
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ==================== 配置 ====================
const PROJECT_ROOT = path.resolve(__dirname, '..');
const BACKUP_DIR = path.join(PROJECT_ROOT, 'backup');
const LOG_FILE = path.join(PROJECT_ROOT, 'backup.log');
const DB_FILE = path.join(PROJECT_ROOT, 'server', 'data', 'zhongtie.db');
const UPLOADS_DIR = path.join(PROJECT_ROOT, 'server', 'uploads');
const RETENTION_DAYS = 30;

// 按日期命名的备份目录
const today = new Date();
const dateStr = today.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
const dateDisplay = today.toISOString().slice(0, 10); // YYYY-MM-DD
const TARGET_DIR = path.join(BACKUP_DIR, `backup_${dateStr}`);

// ==================== 工具函数 ====================

function log(message) {
  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);
  const line = `[${timestamp}] ${message}`;
  console.log(line);
  try {
    fs.appendFileSync(LOG_FILE, line + '\n', 'utf8');
  } catch (err) {
    console.error(`无法写入日志文件: ${err.message}`);
  }
}

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) {
    throw new Error(`源目录不存在: ${src}`);
  }
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function removeDirSync(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      removeDirSync(fullPath);
    } else {
      fs.unlinkSync(fullPath);
    }
  }
  fs.rmdirSync(dir);
}

function getDirSize(dir) {
  if (!fs.existsSync(dir)) return 0;
  let size = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      size += getDirSize(fullPath);
    } else {
      size += fs.statSync(fullPath).size;
    }
  }
  return size;
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

function showNotification(title, message) {
  try {
    // PowerShell Toast 通知 (Win10/Win11)
    const psScript = `
      [Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] | Out-Null
      [Windows.Data.Xml.Dom.XmlDocument, Windows.Data.Xml.Dom.XmlDocument, ContentType = WindowsRuntime] | Out-Null
      $template = @"
      <toast>
        <visual>
          <binding template="ToastText02">
            <text id="1">${title}</text>
            <text id="2">${message}</text>
          </binding>
        </visual>
      </toast>
"@
      $xml = New-Object Windows.Data.Xml.Dom.XmlDocument
      $xml.LoadXml($template)
      $toast = New-Object Windows.UI.Notifications.ToastNotification $xml
      [Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier("Zhongtie Backup").Show($toast)
    `;
    execSync(`powershell -NoProfile -Command "${psScript.replace(/"/g, '\\"')}"`, { timeout: 10000 });
  } catch (e) {
    try {
      execSync(`msg * "${title}: ${message}"`, { timeout: 5000 });
    } catch (e2) {
      // 忽略通知失败
    }
  }
}

// ==================== 备份流程 ====================

log('========== 开始每日备份 ==========');
log(`备份日期: ${dateDisplay}`);
log(`目标目录: ${TARGET_DIR}`);

const results = {
  dbBackup: { status: 'skipped', size: 0 },
  uploadsBackup: { status: 'skipped', size: 0 },
  cleanup: { status: 'skipped', removed: 0 }
};

// 1. 创建备份目标目录
try {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
  log('备份目录已创建');
} catch (err) {
  log(`ERROR: 创建备份目录失败 - ${err.message}`);
  showNotification('备份失败', `无法创建备份目录: ${err.message}`);
  process.exit(1);
}

// 2. 备份数据库文件
if (fs.existsSync(DB_FILE)) {
  try {
    const destDb = path.join(TARGET_DIR, 'zhongtie.db');
    fs.copyFileSync(DB_FILE, destDb);
    const dbSize = fs.statSync(destDb).size;
    results.dbBackup = { status: 'success', size: dbSize };
    log(`数据库备份成功: ${formatSize(dbSize)}`);
  } catch (err) {
    results.dbBackup = { status: 'failed', size: 0 };
    log(`ERROR: 数据库备份失败 - ${err.message}`);
  }
} else {
  log(`数据库文件不存在，跳过备份: ${DB_FILE}`);
}

// 3. 备份上传文件
if (fs.existsSync(UPLOADS_DIR)) {
  try {
    const destUploads = path.join(TARGET_DIR, 'uploads');
    copyDirSync(UPLOADS_DIR, destUploads);
    const uploadsSize = getDirSize(destUploads);
    results.uploadsBackup = { status: 'success', size: uploadsSize };
    log(`上传文件备份成功: ${formatSize(uploadsSize)}`);
  } catch (err) {
    results.uploadsBackup = { status: 'failed', size: 0 };
    log(`ERROR: 上传文件备份失败 - ${err.message}`);
  }
} else {
  log(`上传目录不存在，跳过备份: ${UPLOADS_DIR}`);
}

// 4. 清理30天前的旧备份
const cutoffDate = new Date(today);
cutoffDate.setDate(cutoffDate.getDate() - RETENTION_DAYS);
log(`清理阈值: ${RETENTION_DAYS}天前 (${cutoffDate.toISOString().slice(0, 10)})`);

let removedCount = 0;
try {
  if (fs.existsSync(BACKUP_DIR)) {
    const entries = fs.readdirSync(BACKUP_DIR, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory() || !entry.name.startsWith('backup_')) continue;
      const backupPath = path.join(BACKUP_DIR, entry.name);
      const datePart = entry.name.replace('backup_', '');
      if (datePart.length !== 8) continue;

      const y = parseInt(datePart.slice(0, 4), 10);
      const m = parseInt(datePart.slice(4, 6), 10) - 1;
      const d = parseInt(datePart.slice(6, 8), 10);
      const backupDate = new Date(y, m, d);

      if (backupDate < cutoffDate) {
        const backupSize = getDirSize(backupPath);
        removeDirSync(backupPath);
        removedCount++;
        log(`已清理旧备份: ${entry.name} (${formatSize(backupSize)})`);
      }
    }
  }
  results.cleanup = { status: 'success', removed: removedCount };
  log(`清理完成: 移除 ${removedCount} 个旧备份`);
} catch (err) {
  results.cleanup = { status: 'failed', removed: removedCount };
  log(`ERROR: 清理旧备份失败 - ${err.message}`);
}

// 5. 汇总
const totalBackupSize = getDirSize(TARGET_DIR);

log('========== 备份汇总 ==========');
log(`数据库备份: ${results.dbBackup.status} (${results.dbBackup.size > 0 ? formatSize(results.dbBackup.size) : 'N/A'})`);
log(`上传文件备份: ${results.uploadsBackup.status} (${results.uploadsBackup.size > 0 ? formatSize(results.uploadsBackup.size) : 'N/A'})`);
log(`旧备份清理: ${results.cleanup.status} (移除 ${results.cleanup.removed} 个)`);
log(`本次备份总大小: ${formatSize(totalBackupSize)}`);
log(`备份目录: ${TARGET_DIR}`);
log('========== 备份任务完成 ==========');

// 6. 桌面通知
const allSuccess = (results.dbBackup.status === 'success' || results.dbBackup.status === 'skipped') &&
                   (results.uploadsBackup.status === 'success' || results.uploadsBackup.status === 'skipped') &&
                   (results.cleanup.status === 'success' || results.cleanup.status === 'skipped');

if (allSuccess) {
  showNotification('中铁电气备份完成', `备份日期: ${dateDisplay}\n大小: ${formatSize(totalBackupSize)}\n已清理 ${removedCount} 个旧备份`);
} else {
  const failedItems = [];
  if (results.dbBackup.status === 'failed') failedItems.push('数据库');
  if (results.uploadsBackup.status === 'failed') failedItems.push('上传文件');
  if (results.cleanup.status === 'failed') failedItems.push('清理');
  showNotification('中铁电气备份(部分失败)', `失败项: ${failedItems.join(', ')}\n日期: ${dateDisplay}`);
}

process.exit(allSuccess ? 0 : 1);