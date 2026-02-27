@echo off
echo ========================================
echo First Time Setup - Windows
echo ========================================
echo.
echo This will install all dependencies.
echo This only needs to be run ONCE.
echo.
pause

echo.
echo [1/2] Installing Backend Dependencies...
echo ========================================
cd backend
python -m pip install --upgrade pip
pip install -r requirements.txt
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Backend installation failed!
    echo Try: py -m pip install -r requirements.txt
    pause
    exit /b 1
)
cd ..

echo.
echo [2/2] Installing Frontend Dependencies...
echo ========================================
cd frontend-app
call npm install
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Frontend installation failed!
    pause
    exit /b 1
)
cd ..

echo.
echo ========================================
echo Setup Complete! ✓
echo ========================================
echo.
echo Next step: Double-click START_APP.bat
echo.
pause
