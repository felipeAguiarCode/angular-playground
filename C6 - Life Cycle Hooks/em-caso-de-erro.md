
# EM CASO DE ERRO

1. Desinstale a ferramenta
Get-ExecutionPolicy -List

```bash
npm uninstall -g @angular/cli
```

```bash
npm cache clean --force
npm cache verify
```

```bash
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Limpeza
https://bobbyhadz.com/blog/ng-cannot-be-loaded-running-scripts-disabled