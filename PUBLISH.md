# 发布 @ui 组件库指南

## 🚀 发布流程

### 1. 准备工作

首先，确保已经完成以下步骤：

```bash
# 进入组件库目录
cd app/_components/@ui

# 安装依赖
npm install

# 构建项目
npm run build
```

### 2. 更新 package.json

修改 `package.json` 中的以下字段：

```json
{
  "name": "@你的用户名/ui-components",  // 替换为你的 npm 用户名
  "version": "1.0.0",                  // 版本号
  "repository": {
    "type": "git",
    "url": "https://github.com/你的用户名/ui-components.git"  // 替换为你的仓库地址
  }
}
```

### 3. 登录 npm

```bash
npm login
```

输入你的 npm 用户名、密码和邮箱。

### 4. 发布到 npm

```bash
# 首次发布
npm publish --access public

# 后续更新发布（记得先更新版本号）
npm version patch  # 或 minor/major
npm publish
```

### 5. 创建 GitHub 仓库

1. 在 GitHub 创建新仓库 `ui-components`
2. 将组件库代码推送到仓库：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/ui-components.git
git push -u origin main
```

### 6. 设置 GitHub Pages（可选）

为了让 CLI 工具能够下载组件文件，需要将组件文件放在 GitHub 的原始文件链接中：

1. 在仓库根目录创建 `src/` 文件夹
2. 将所有 `.tsx` 组件文件复制到 `src/` 文件夹
3. 更新 CLI 工具中的 `REPO_URL` 为你的仓库地址

### 7. 测试安装

发布成功后，可以在其他项目中测试：

```bash
# 测试 npx 命令
npx @你的用户名/ui-components button

# 测试包安装
npm install @你的用户名/ui-components
```

## 📋 检查清单

发布前请确认：

- [ ] 所有组件导入路径已修复
- [ ] `package.json` 信息已更新
- [ ] 构建成功无错误
- [ ] README.md 已更新
- [ ] GitHub 仓库已创建
- [ ] npm 账号已登录
- [ ] 版本号已更新

## 🔧 常见问题

### Q: npm publish 失败？
A: 检查包名是否已被占用，可以在 npmjs.com 搜索确认。

### Q: npx 命令无法下载文件？
A: 确认 GitHub 仓库是公开的，且文件路径正确。

### Q: 组件样式不生效？
A: 确认用户项目已正确配置 Tailwind CSS。

## 📈 版本管理

使用语义化版本：
- `patch`: 修复 bug (1.0.0 -> 1.0.1)
- `minor`: 新增功能 (1.0.0 -> 1.1.0)  
- `major`: 破坏性更改 (1.0.0 -> 2.0.0)

```bash
npm version patch && npm publish
npm version minor && npm publish
npm version major && npm publish
``` 