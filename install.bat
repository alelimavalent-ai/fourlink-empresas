@echo off
chcp 65001 >nul
title Fourlink Empresas - Instalar dependencias
echo ============================================
echo  Instalando as dependencias do projeto...
echo  (necessario apenas na primeira vez)
echo ============================================
call npm install
if %errorlevel% neq 0 (
  echo.
  echo [ERRO] Falha no npm install. Verifique o Node.js e a conexao.
  pause
  exit /b 1
)
echo.
echo [OK] Dependencias instaladas. Use "npm run dev" para abrir o site localmente.
pause
