# [分享] VSCode 配置与团队 ESLint 和 TSLint 配置

### 2019/12/25 更新

---

<!--more-->

### [VSCode 官网](https://code.visualstudio.com/)

---

**常用插件**

- [Eslint](<[https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)>)：代码检查, 跑 ESlint 的时候直接跑 VSCode 配置里的 Rule。
- [Eslint-disable-snippets](https://marketplace.visualstudio.com/items?itemName=drKnoxy.eslint-disable-snippets): 代码内快速生成 eslint-disable 代码块

---

**setting.json**

```setting.json
{
  /**  vscode 系统配置项 */
  "window.zoomLevel": 0,
  "files.autoSave": "afterDelay",
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "vsicons.dontShowNewVersionMessage": true,
  "editor.foldingStrategy": "indentation",
  "git.autofetch": true,
  "git.enableSmartCommit": true,
  "editor.tabCompletion": "on",
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true,
    "source.fixAll.eslint": true
  },
  "editor.accessibilitySupport": "off",
  "terminal.integrated.rendererType": "dom",

  /**  代码格式化配置 */
  "editor.tabSize": 2,
  // 打开对vue的lint,并自动fix
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  // 尽可能控制尾随逗号的打印
  "prettier.trailingComma": "all",
  // 在保存时格式化文件
  "editor.formatOnSave": true,
  // 保存时自动fix
  "eslint.autoFixOnSave": true,
  // 格式化插件的配置
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {}
  },
   // 对于.vue文件,交给prettier,stylus因为prettier不支持改用vertur选项
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.postcss": "prettier",
  "vetur.format.defaultFormatter.scss": "prettier",
  "vetur.format.defaultFormatter.less": "prettier",
  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
  "vetur.format.defaultFormatter.js": "prettier",
  "vetur.format.defaultFormatter.ts": "prettier",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  /**  第三方插件库配置 */
  "px2rem-plus.base": 100,
  "workbench.iconTheme": "vscode-icons",
  "workbench.startupEditor": "newUntitledFile",
  "liveServer.settings.donotShowInfoMsg": true,
  // 自动导入
  "typescript.updateImportsOnFileMove.enabled": "prompt",
  "javascript.updateImportsOnFileMove.enabled": "prompt",
  "javascript.suggest.autoImports": true,
  // 文件修改自动载入作者与时间
  "fileheader.configObj": {
    "createFileTime": true,
    "language": {
      "languagetest": {
        "head": "/$$",
        "middle": " $ @",
        "end": " $/"
      }
    },
    "autoAdd": false,
    "autoAlready": true,
    "annotationStr": {
      "head": "/*",
      "middle": " * @",
      "end": " */",
      "use": false
    },
    "headInsertLine": {
      "php": 2
    },
    "beforeAnnotation": {},
    "afterAnnotation": {},
    "specialOptions": {},
    "switch": {
      "newlineAddAnnotation": true
    },
    "config": {
      "dateFormat": "YYYY-MM-DD HH:mm:ss",
      "prohibitAutoAdd": ["json"],
      "moveCursor": true
    }
  },
  "fileheader.cursorMode": {},
  "fileheader.customMade": {
    "Author": "ZStop",
    "Date": "Do not edit", // 文件创建时间(不变)
    "LastEditors": "ZStop", // 文件最后编辑者
    "LastEditTime": "Do not edit" // 文件最后编辑时间
  },
  "diffEditor.ignoreTrimWhitespace": false,
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
}

```

---

**tslint.json**

```tslint.json
{
  "defaultSeverity": "warning",
  "extends": ["tslint:recommended"],
  "linterOptions": {
    "exclude": ["node_modules/**"]
  },
  "rules": {
    "indent": [true, "spaces", 2],
    "interface-name": false,
    "ordered-imports": false,
    "object-literal-sort-keys": false,
    "max-line-length": false,
    "no-consecutive-blank-lines": false,
    "trailing-comma": false,
    "eofline": false,
    "quotemark": false,
    "typedef-whitespace": false,
    "no-console": false,
    "no-var-requires": false,
    "prefer-for-of": false,
    "forin": false,
    "variable-name": false,
    "no-empty": false,
    "noImplicitThis": false,
    "arrow-parens": false,
    "no-shadow": false,
    "no-shadowed-variable": false,
    "only-arrow-functions": false
  }
}

```
