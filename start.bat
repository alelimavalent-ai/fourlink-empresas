@echo off
chcp 65001 >nul
title Fourlink Empresas - Desenvolvimento local
echo Abrindo o site em http://localhost:4321 (Ctrl+C para parar)
call npm run dev
