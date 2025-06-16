# 测试 "all" 命令功能

## 🧪 模拟 `npx @aigcode/ui-components all` 效果

当用户运行 `npx @aigcode/ui-components all` 时，会发生以下操作：

### 1. 初始化
```
🚀 开始安装所有组件...

📁 已创建 components/ui 目录
📋 准备下载 25 个组件文件...
```

### 2. 下载组件文件
```
📥 (1/25) 下载 button.tsx...
✅ button.tsx 下载完成

📥 (2/25) 下载 input.tsx...
✅ input.tsx 下载完成

📥 (3/25) 下载 label.tsx...
✅ label.tsx 下载完成

📥 (4/25) 下载 textarea.tsx...
✅ textarea.tsx 下载完成

📥 (5/25) 下载 badge.tsx...
✅ badge.tsx 下载完成

📥 (6/25) 下载 card.tsx...
✅ card.tsx 下载完成

📥 (7/25) 下载 separator.tsx...
✅ separator.tsx 下载完成

📥 (8/25) 下载 sheet.tsx...
✅ sheet.tsx 下载完成

📥 (9/25) 下载 checkbox.tsx...
✅ checkbox.tsx 下载完成

📥 (10/25) 下载 switch.tsx...
✅ switch.tsx 下载完成

📥 (11/25) 下载 select.tsx...
✅ select.tsx 下载完成

📥 (12/25) 下载 form.tsx...
✅ form.tsx 下载完成

📥 (13/25) 下载 tabs.tsx...
✅ tabs.tsx 下载完成

📥 (14/25) 下载 accordion.tsx...
✅ accordion.tsx 下载完成

📥 (15/25) 下载 menubar.tsx...
✅ menubar.tsx 下载完成

📥 (16/25) 下载 dropdown-menu.tsx...
✅ dropdown-menu.tsx 下载完成

📥 (17/25) 下载 alert.tsx...
✅ alert.tsx 下载完成

📥 (18/25) 下载 progress.tsx...
✅ progress.tsx 下载完成

📥 (19/25) 下载 tooltip.tsx...
✅ tooltip.tsx 下载完成

📥 (20/25) 下载 table.tsx...
✅ table.tsx 下载完成

📥 (21/25) 下载 avatar.tsx...
✅ avatar.tsx 下载完成

📥 (22/25) 下载 calendar.tsx...
✅ calendar.tsx 下载完成

📥 (23/25) 下载 resizable.tsx...
✅ resizable.tsx 下载完成

📥 (24/25) 下载 toggle.tsx...
✅ toggle.tsx 下载完成

📥 (25/25) 下载 popover.tsx...
✅ popover.tsx 下载完成
```

### 3. 创建工具函数
```
✅ 已创建 lib/utils.ts
```

### 4. 安装依赖包
```
📦 安装 15 个依赖包...

npm install @radix-ui/react-slot @radix-ui/react-label @radix-ui/react-separator @radix-ui/react-dialog @radix-ui/react-checkbox @radix-ui/react-switch @radix-ui/react-select @radix-ui/react-tabs @radix-ui/react-accordion @radix-ui/react-menubar @radix-ui/react-dropdown-menu @radix-ui/react-progress @radix-ui/react-tooltip @radix-ui/react-avatar @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-popover react-day-picker date-fns react-resizable-panels class-variance-authority clsx tailwind-merge lucide-react react-hook-form @hookform/resolvers

✅ 依赖包安装完成
```

### 5. 完成总结
```
🎉 所有组件安装完成！

📊 安装统计:
  - 组件数量: 21
  - 文件数量: 25
  - 依赖数量: 15

使用方法:
import { Button, Input, Card } from "@/components/ui/button"
import { Select, Tabs, Alert } from "@/components/ui/select"
```

## 📁 安装后的目录结构

```
your-project/
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── textarea.tsx
│       ├── badge.tsx
│       ├── card.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── checkbox.tsx
│       ├── switch.tsx
│       ├── select.tsx
│       ├── form.tsx
│       ├── tabs.tsx
│       ├── accordion.tsx
│       ├── menubar.tsx
│       ├── dropdown-menu.tsx
│       ├── alert.tsx
│       ├── progress.tsx
│       ├── tooltip.tsx
│       ├── table.tsx
│       ├── avatar.tsx
│       ├── calendar.tsx
│       ├── resizable.tsx
│       ├── toggle.tsx
│       └── popover.tsx
├── lib/
│   └── utils.ts
└── package.json (updated with new dependencies)
```

## 🎯 优势

1. **一键安装** - 无需逐个安装组件
2. **智能去重** - 自动处理重复依赖
3. **完整生态** - 获得所有21个组件
4. **即用即可** - 安装后立即可以使用任意组件
5. **依赖优化** - 自动安装所有必要依赖

## 📝 使用示例

安装完成后，你可以立即使用任意组件：

```tsx
// 基础组件
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// 复杂组件
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"

import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

// 表单组件
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

// 数据展示
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function CompleteUIExample() {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>完整组件示例</CardTitle>
          <CardDescription>使用 all 命令安装的所有组件</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Badge>用户</Badge>
          </div>
          
          <Input placeholder="输入你的名字..." />
          
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="选择一个选项" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">选项 1</SelectItem>
              <SelectItem value="option2">选项 2</SelectItem>
            </SelectContent>
          </Select>
          
          <Textarea placeholder="输入你的消息..." />
          
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label htmlFor="terms">同意条款和条件</label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch id="notifications" />
            <label htmlFor="notifications">启用通知</label>
          </div>
          
          <Progress value={66} className="w-full" />
        </CardContent>
        <CardFooter>
          <Button className="w-full">提交</Button>
        </CardFooter>
      </Card>
      
      <Alert>
        <AlertTitle>提示</AlertTitle>
        <AlertDescription>
          所有组件都已成功安装并可以使用！
        </AlertDescription>
      </Alert>
    </div>
  )
} 