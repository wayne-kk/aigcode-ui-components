#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const REPO_URL = 'https://raw.githubusercontent.com/wayne-kk/aigcode-ui-components/main'

// 可用的组件列表
const COMPONENTS = {
    // 基础组件
    button: {
        files: ['button.tsx'],
        dependencies: ['@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge']
    },
    input: {
        files: ['input.tsx'],
        dependencies: ['clsx', 'tailwind-merge']
    },
    label: {
        files: ['label.tsx'],
        dependencies: ['@radix-ui/react-label', 'clsx', 'tailwind-merge']
    },
    textarea: {
        files: ['textarea.tsx'],
        dependencies: ['clsx', 'tailwind-merge']
    },
    badge: {
        files: ['badge.tsx'],
        dependencies: ['class-variance-authority', 'clsx', 'tailwind-merge']
    },

    // 布局组件
    card: {
        files: ['card.tsx'],
        dependencies: ['clsx', 'tailwind-merge']
    },
    separator: {
        files: ['separator.tsx'],
        dependencies: ['@radix-ui/react-separator', 'clsx', 'tailwind-merge']
    },
    sheet: {
        files: ['sheet.tsx'],
        dependencies: ['@radix-ui/react-dialog', 'lucide-react', 'clsx', 'tailwind-merge']
    },

    // 表单组件
    checkbox: {
        files: ['checkbox.tsx'],
        dependencies: ['@radix-ui/react-checkbox', 'clsx', 'tailwind-merge']
    },
    switch: {
        files: ['switch.tsx'],
        dependencies: ['@radix-ui/react-switch', 'clsx', 'tailwind-merge']
    },
    select: {
        files: ['select.tsx'],
        dependencies: ['@radix-ui/react-select', 'clsx', 'tailwind-merge']
    },
    form: {
        files: ['form.tsx'],
        dependencies: ['@radix-ui/react-label', '@radix-ui/react-slot', 'react-hook-form', '@hookform/resolvers', 'clsx', 'tailwind-merge']
    },

    // 导航组件
    tabs: {
        files: ['tabs.tsx'],
        dependencies: ['@radix-ui/react-tabs', 'clsx', 'tailwind-merge']
    },
    accordion: {
        files: ['accordion.tsx'],
        dependencies: ['@radix-ui/react-accordion', 'clsx', 'tailwind-merge']
    },
    menubar: {
        files: ['menubar.tsx'],
        dependencies: ['@radix-ui/react-menubar', 'clsx', 'tailwind-merge']
    },
    'dropdown-menu': {
        files: ['dropdown-menu.tsx'],
        dependencies: ['@radix-ui/react-dropdown-menu', 'clsx', 'tailwind-merge']
    },

    // 反馈组件
    alert: {
        files: ['alert.tsx'],
        dependencies: ['class-variance-authority', 'clsx', 'tailwind-merge']
    },
    progress: {
        files: ['progress.tsx'],
        dependencies: ['@radix-ui/react-progress', 'clsx', 'tailwind-merge']
    },
    tooltip: {
        files: ['tooltip.tsx'],
        dependencies: ['@radix-ui/react-tooltip', 'clsx', 'tailwind-merge']
    },

    // 数据展示
    table: {
        files: ['table.tsx'],
        dependencies: ['clsx', 'tailwind-merge']
    },
    avatar: {
        files: ['avatar.tsx'],
        dependencies: ['@radix-ui/react-avatar', 'clsx', 'tailwind-merge']
    },
    calendar: {
        files: ['calendar.tsx', 'button.tsx'],
        dependencies: ['@radix-ui/react-slot', 'react-day-picker', 'lucide-react', 'date-fns', 'class-variance-authority', 'clsx', 'tailwind-merge']
    },

    // 高级组件
    resizable: {
        files: ['resizable.tsx'],
        dependencies: ['react-resizable-panels', 'lucide-react', 'clsx', 'tailwind-merge']
    },
    toggle: {
        files: ['toggle.tsx'],
        dependencies: ['@radix-ui/react-toggle', 'class-variance-authority', 'clsx', 'tailwind-merge']
    },
    'toggle-group': {
        files: ['toggle-group.tsx', 'toggle.tsx'],
        dependencies: ['@radix-ui/react-toggle-group', '@radix-ui/react-toggle', 'class-variance-authority', 'clsx', 'tailwind-merge']
    },
    popover: {
        files: ['popover.tsx'],
        dependencies: ['@radix-ui/react-popover', 'clsx', 'tailwind-merge']
    },
    chart: {
        files: ['chart.tsx'],
        dependencies: ['recharts', 'clsx', 'tailwind-merge']
    },
    'render-canvas': {
        files: ['renderCanvas.tsx'],
        dependencies: ['clsx', 'tailwind-merge']
    }
}

function showHelp() {
    console.log(`
使用方法: npx @aigcode/ui-components <组件名|all>

可用组件:
${Object.keys(COMPONENTS).map(comp => `  - ${comp}`).join('\n')}

特殊命令:
  all  - 安装所有组件

示例:
  npx @aigcode/ui-components button     # 安装单个组件
  npx @aigcode/ui-components all        # 安装所有组件
  npx @aigcode/ui-components card       # 安装卡片组件

这将会:
1. 下载指定组件文件到 components/ui/ 目录
2. 安装必要的依赖包
3. 创建必要的工具函数（如果不存在）
`)
}

async function downloadFile(url, filePath, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            // 使用 curl 命令下载，更可靠
            execSync(`curl -L -f --connect-timeout 30 --max-time 60 -o "${filePath}" "${url}"`, {
                stdio: 'pipe'
            })

            // 检查文件是否存在且不为空
            if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
                return
            } else {
                throw new Error('下载的文件为空或不存在')
            }
        } catch (error) {
            console.log(`⚠️  下载失败 (${i + 1}/${retries}): ${error.message}`)

            // 清理失败的文件
            if (fs.existsSync(filePath)) {
                fs.unlink(filePath, () => { })
            }

            // 如果是最后一次重试，抛出错误
            if (i === retries - 1) {
                throw error
            }

            // 等待一秒后重试
            await new Promise(resolve => setTimeout(resolve, 1000))
        }
    }
}

async function ensureUtilsFile() {
    const utilsContent = `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`

    // 创建 components/ui/utils.ts
    const uiUtilsPath = path.join(process.cwd(), 'components', 'ui', 'utils.ts')
    if (!fs.existsSync(uiUtilsPath)) {
        const uiLibDir = path.dirname(uiUtilsPath)
        if (!fs.existsSync(uiLibDir)) {
            fs.mkdirSync(uiLibDir, { recursive: true })
        }
        fs.writeFileSync(uiUtilsPath, utilsContent)
        console.log('✅ 已创建 components/ui/utils.ts')
    }

    // 创建 lib/utils.ts
    const libUtilsPath = path.join(process.cwd(), 'lib', 'utils.ts')
    if (!fs.existsSync(libUtilsPath)) {
        const libDir = path.dirname(libUtilsPath)
        if (!fs.existsSync(libDir)) {
            fs.mkdirSync(libDir, { recursive: true })
        }
        fs.writeFileSync(libUtilsPath, utilsContent)
        console.log('✅ 已创建 lib/utils.ts')
    }
}

async function installDependencies(dependencies) {
    if (dependencies.length > 0) {
        console.log('📦 安装依赖包...')
        try {
            const packageManager = fs.existsSync('yarn.lock') ? 'yarn' : 'npm'
            const installCommand = packageManager === 'yarn' ? 'yarn add' : 'npm install'

            // 去重依赖
            const uniqueDependencies = [...new Set(dependencies)]

            execSync(`${installCommand} ${uniqueDependencies.join(' ')}`, { stdio: 'inherit' })
            console.log('✅ 依赖包安装完成')
        } catch (error) {
            console.error('❌ 依赖包安装失败:', error.message)
        }
    }
}

async function addComponent(componentName) {
    const component = COMPONENTS[componentName]

    if (!component) {
        console.error(`❌ 未找到组件: ${componentName}`)
        console.log('\n可用组件:')
        Object.keys(COMPONENTS).forEach(comp => {
            console.log(`  - ${comp}`)
        })
        console.log('\n特殊命令:')
        console.log('  - all (安装所有组件)')
        return
    }

    // 创建组件目录
    const componentsDir = path.join(process.cwd(), 'components', 'ui')
    if (!fs.existsSync(componentsDir)) {
        fs.mkdirSync(componentsDir, { recursive: true })
        console.log('📁 已创建 components/ui 目录')
    }

    try {
        // 下载组件文件
        const downloadedFiles = new Set() // 防止重复下载

        for (const fileName of component.files) {
            if (downloadedFiles.has(fileName)) {
                console.log(`⏭️  ${fileName} 已存在，跳过下载`)
                continue
            }

            const fileUrl = `${REPO_URL}/${fileName}`
            const filePath = path.join(componentsDir, fileName)

            console.log(`📥 下载 ${fileName}...`)
            await downloadFile(fileUrl, filePath)
            console.log(`✅ ${fileName} 下载完成`)
            downloadedFiles.add(fileName)
        }

        // 确保 utils 文件存在
        await ensureUtilsFile()

        // 安装依赖
        await installDependencies([...component.dependencies, 'clsx', 'tailwind-merge'])

        console.log(`\n🎉 组件 ${componentName} 添加成功！`)
        console.log(`\n使用方法:`)
        console.log(`import { ${componentName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')} } from "@/components/ui/${componentName}"`)

    } catch (error) {
        console.error(`❌ 添加组件失败:`, error.message)
    }
}

async function addAllComponents() {
    console.log('🚀 开始安装所有组件...\n')

    // 创建组件目录
    const componentsDir = path.join(process.cwd(), 'components', 'ui')
    if (!fs.existsSync(componentsDir)) {
        fs.mkdirSync(componentsDir, { recursive: true })
        console.log('📁 已创建 components/ui 目录')
    }

    try {
        // 收集所有文件和依赖
        const allFiles = new Set()
        const allDependencies = new Set(['clsx', 'tailwind-merge'])

        Object.entries(COMPONENTS).forEach(([name, component]) => {
            component.files.forEach(file => allFiles.add(file))
            component.dependencies.forEach(dep => allDependencies.add(dep))
        })

        console.log(`📋 准备下载 ${allFiles.size} 个组件文件...\n`)

        // 下载所有组件文件
        let downloadCount = 0
        for (const fileName of allFiles) {
            const fileUrl = `${REPO_URL}/${fileName}`
            const filePath = path.join(componentsDir, fileName)

            console.log(`📥 (${++downloadCount}/${allFiles.size}) 下载 ${fileName}...`)
            await downloadFile(fileUrl, filePath)
            console.log(`✅ ${fileName} 下载完成`)
        }

        // 确保 utils 文件存在
        await ensureUtilsFile()

        // 安装所有依赖
        console.log(`\n📦 安装 ${allDependencies.size} 个依赖包...`)
        await installDependencies([...allDependencies])

        console.log(`\n🎉 所有组件安装完成！`)
        console.log(`\n📊 安装统计:`)
        console.log(`  - 组件数量: ${Object.keys(COMPONENTS).length}`)
        console.log(`  - 文件数量: ${allFiles.size}`)
        console.log(`  - 依赖数量: ${allDependencies.size}`)

        console.log(`\n使用方法:`)
        console.log(`import { Button, Input, Card } from "@/components/ui/button"`)
        console.log(`import { Select, Tabs, Alert } from "@/components/ui/select"`)

    } catch (error) {
        console.error(`❌ 安装所有组件失败:`, error.message)
    }
}

// 主程序
const args = process.argv.slice(2)

if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    showHelp()
} else {
    const input = args[0].toLowerCase()

    if (input === 'all') {
        addAllComponents()
    } else {
        addComponent(input)
    }
} 