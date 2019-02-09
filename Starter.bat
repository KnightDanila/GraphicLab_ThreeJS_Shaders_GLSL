@echo off
echo %CD%
echo %~dp0
cd /d %~dp0


"MozillaFirefox/FirefoxPortable.exe" "%~dp0\index.html"