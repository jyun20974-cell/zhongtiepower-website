@echo off
REM ============================================================
REM  CREC Group Website - One-Command Build & Run
REM  Double-click this file to build and serve the website
REM ============================================================
echo.
echo [1/3] Installing dependencies...
echo.
cd /d "%~dp0client"
if not exist "node_modules" (
    call npm install
) else (
    echo node_modules already exists, skipping install
)

echo.
echo [2/3] Building production version...
echo.
call npm run build

echo.
echo [3/3] Starting preview server on http://localhost:4173/
echo.
start "" http://localhost:4173
call npm run preview

pause
