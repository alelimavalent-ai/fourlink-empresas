@echo off
chcp 65001 >nul
title Fourlink Empresas - Gerar dist para Cloudflare Pages
echo ================================================
echo   Gerando a pasta dist (versao de producao)
echo ================================================
if not exist node_modules (
  echo Instalando dependencias pela primeira vez...
  call npm install
  if %errorlevel% neq 0 ( echo. & echo [ERRO] Falha no npm install. Verifique o Node.js e a internet. & pause & exit /b 1 )
)
echo Compilando o site...
call npm run build
if %errorlevel% neq 0 ( echo. & echo [ERRO] O build falhou. Leia a mensagem acima e me envie. & pause & exit /b 1 )
echo.
echo [OK] Pasta "dist" gerada com sucesso!
echo.
echo Agora publique no Cloudflare Pages:
echo   1) Cloudflare ^> Workers ^& Pages ^> Create ^> Pages ^> Upload assets
echo   2) De um nome ao projeto (ex: fourlink-empresas)
echo   3) Arraste a pasta "dist" para a area de upload
echo   4) Em Custom domains, aponte fourlinkempresas.com
echo.
echo Abrindo a pasta dist...
if exist dist start "" explorer dist
pause
