# @aigcode/ui-components

一个现代化的 React UI 组件库，基于 Radix UI 和 Tailwind CSS 构建。

## 🚀 安装使用

### 方式一：使用 npx 单独安装组件（推荐）

```bash
# 安装单个组件
npx @aigcode/ui-components button
npx @aigcode/ui-components input
npx @aigcode/ui-components card

# 🆕 一次性安装所有组件
npx @aigcode/ui-components all
```

### 方式二：安装整个包

```bash
npm install @aigcode/ui-components
# 或
yarn add @aigcode/ui-components
```

## 📦 可用组件 (共21个)

### 基础组件 (5个)
- **button** - 按钮组件，支持多种样式和尺寸
- **input** - 输入框组件
- **label** - 标签组件
- **textarea** - 文本域组件
- **badge** - 徽章组件

### 布局组件 (3个)
- **card** - 卡片容器组件
- **separator** - 分隔线组件
- **sheet** - 侧边栏组件

### 表单组件 (4个)
- **form** - 表单组件
- **checkbox** - 复选框组件
- **switch** - 开关组件
- **select** - 选择器组件

### 导航组件 (4个)
- **tabs** - 标签页组件
- **accordion** - 手风琴组件
- **menubar** - 菜单栏组件
- **dropdown-menu** - 下拉菜单组件

### 反馈组件 (3个)
- **alert** - 警告提示组件
- **progress** - 进度条组件
- **tooltip** - 工具提示组件

### 数据展示 (3个)
- **table** - 表格组件
- **avatar** - 头像组件
- **calendar** - 日历组件

### 高级组件 (4个)
- **resizable** - 可调整大小组件
- **toggle** - 切换组件
- **toggle-group** - 切换组合组件
- **popover** - 弹出框组件

## 🎯 使用示例

### 1. 安装单个组件

```bash
npx @aigcode/ui-components button
```

这会：
- 下载 `button.tsx` 到 `components/ui/` 目录
- 自动安装必要依赖：`@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `tailwind-merge`
- 创建 `lib/utils.ts` 工具函数（如果不存在）

然后使用：
```tsx
import { Button } from "@/components/ui/button"

export function Example() {
  return <Button>点击我</Button>
}
```

### 2. 🆕 安装所有组件

```bash
npx @aigcode/ui-components all
```

这会：
- 下载所有 21 个组件文件到 `components/ui/` 目录
- 自动安装所有必要的依赖包
- 创建完整的工具函数集合
- 显示安装统计信息

然后可以使用任意组件：
```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CompleteExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>完整示例</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="请输入内容..." />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="选择选项" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">选项1</SelectItem>
            <SelectItem value="option2">选项2</SelectItem>
          </SelectContent>
        </Select>
        <Button>提交</Button>
      </CardContent>
    </Card>
  )
}
```

### 3. 使用完整包

```bash
npm install @aigcode/ui-components
```

然后导入使用：
```tsx
import { Button, Input, Card, CardContent, CardHeader, CardTitle } from "@aigcode/ui-components"

export function PackageExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>包导入示例</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="请输入内容..." />
        <Button>提交</Button>
      </CardContent>
    </Card>
  )
}
```

## ⚙️ 配置要求

### Tailwind CSS

确保你的项目已安装并配置了 Tailwind CSS：

```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

在你的 `tailwind.config.js` 中添加内容路径：

```js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### TypeScript 路径别名

在你的 `tsconfig.json` 中设置路径别名：

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## 🎨 样式自定义

所有组件都支持通过 `className` 属性自定义样式，我们使用 `cn()` 函数来合并类名：

```tsx
import { Button } from "@/components/ui/button"

<Button className="bg-red-500 hover:bg-red-600">
  自定义样式按钮
</Button>
```

## 📊 CLI 工具功能

### 帮助信息
```bash
npx @aigcode/ui-components --help
```

### 支持的命令
- `npx @aigcode/ui-components <组件名>` - 安装单个组件
- `npx @aigcode/ui-components all` - 安装所有组件
- `npx @aigcode/ui-components --help` - 显示帮助信息

### 安装统计
当使用 `all` 命令时，会显示：
- 组件数量：21个
- 文件数量：约25个（包含依赖文件）
- 依赖数量：约15个

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## �� 许可证

MIT License 