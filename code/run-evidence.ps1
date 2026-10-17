$Host.UI.RawUI.WindowTitle = 'Ledger Lab | Run by Shreya Gajjar'
Set-Location -LiteralPath $PSScriptRoot
Write-Host '============================================================' -ForegroundColor Cyan
Write-Host ' LEDGER LAB | Run by Shreya Gajjar' -ForegroundColor Cyan
Write-Host ' Blockchain transactions and double-spending prevention'
Write-Host '============================================================'
Write-Host ('Execution time: ' + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss zzz'))
& node main.js
Write-Host ''
Write-Host 'Automated verification:' -ForegroundColor Cyan
& node --test --test-reporter=spec test/blockchain.test.js
Write-Host ''
Write-Host 'Execution finished. This is a demonstration with simulated credits.' -ForegroundColor Green

