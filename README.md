# Periodic Table of Elements

一个现代化的交互式元素周期表网页应用，展示所有 118 个化学元素，采用玻璃拟态设计风格，支持中英文切换和明暗主题。

## ✨ 功能特性

- 🎨 **完整元素展示** - 包含元素周期表全部 118 个元素
- 🌍 **双语国际化** - 支持中文和英文界面无缝切换
- 🌙 **智能主题** - 明暗主题自动切换，支持本地存储记忆
- 📊 **详细元素信息** - 点击元素查看：原子序数、原子量、分类、发现年份、电子排布、电子层结构
- ⚛️ **3D 原子可视化** - 使用 Three.js 实现玻尔模型和轨道模型双模式渲染
- 🖱️ **流畅交互** - 支持拖拽旋转、滚轮缩放，动画过渡自然

## 🛠️ 技术栈

- **HTML5** - 语义化页面结构
- **CSS3** - Glassmorphism 玻璃拟态设计、CSS Grid 布局、CSS 变量主题系统
- **JavaScript ES6+** - 模块化编程、异步处理、响应式设计
- **Three.js** - 3D 图形渲染、WebGL 加速
- **LocalStorage** - 用户偏好设置持久化

## 🚀 快速开始

### 方式一：直接打开

直接在浏览器中打开 `index.html` 即可运行，无需任何依赖安装。

### 方式二：本地开发

```bash
# 克隆项目
git clone https://github.com/Enco-shark/element_web.git

# 进入项目目录
cd element_web

# 使用浏览器打开
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 方式三：本地服务器

```bash
# 使用 Python 启动简单服务器
python -m http.server 8000

# 然后访问 http://localhost:8000
```

## 📖 使用说明

### 基本操作

1. **查看元素详情** - 点击周期表中的任意元素卡片查看详细信息
2. **切换语言** - 点击右上角语言按钮 (EN/中) 切换界面语言
3. **切换主题** - 点击右上角主题按钮切换明暗模式
4. **关闭详情面板** - 点击关闭按钮、点击遮罩层或按 Esc 键

### 3D 原子模型操作

1. **切换视图模式** - 在详情面板中点击 "Bohr" 或 "Orbital" 切换模型
2. **旋转模型** - 拖拽 3D 视图区域旋转原子模型
3. **缩放视图** - 使用鼠标滚轮缩放视图

## 📁 项目结构

```
element_web/
├── index.html          # 主页面（HTML 结构）
├── script.js           # 核心 JavaScript 逻辑（约 969 行）
│   ├── 主题切换模块
│   ├── 国际化模块 (I18N)
│   ├── 元素数据 (118 个元素)
│   ├── 周期表渲染模块
│   ├── 详情面板模块
│   └── Three.js 3D 渲染模块
├── styles.css          # 样式文件（约 651 行）
│   ├── 主题变量系统
│   ├── 玻璃拟态样式
│   ├── 周期表布局
│   ├── 详情面板样式
│   └── 响应式设计
├── .gitignore          # Git 忽略配置
└── README.md           # 项目说明文档
```

## 🧪 元素分类

| 分类 | 中文名称 | 元素数量 |
|------|----------|----------|
| Alkali Metals | 碱金属 | 6 |
| Alkaline Earth Metals | 碱土金属 | 6 |
| Transition Metals | 过渡金属 | 38 |
| Post-transition Metals | 后过渡金属 | 7 |
| Metalloids | 准金属 | 6 |
| Nonmetals | 非金属 | 7 |
| Halogens | 卤素 | 6 |
| Noble Gases | 稀有气体 | 6 |
| Lanthanides | 镧系元素 | 15 |
| Actinides | 锕系元素 | 15 |

## 🌐 浏览器兼容性

| 浏览器 | 最低版本 | 支持状态 |
|--------|----------|----------|
| Chrome | 80+ | ✅ 完全支持 |
| Firefox | 75+ | ✅ 完全支持 |
| Safari | 13+ | ✅ 完全支持 |
| Edge | 80+ | ✅ 完全支持 |
| Opera | 67+ | ✅ 完全支持 |

## 📝 版本历史

- **v3.0** - 添加 README 文档、完善项目配置
- **v2.0** - 优化性能、修复已知问题
- **v1.0** - 初始版本，包含基本功能

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- [Three.js](https://threejs.org/) - 3D 渲染引擎
- [Google Fonts](https://fonts.google.com/) - 字体资源
- [cdnjs](https://cdnjs.com/) - CDN 资源

---

**Made with ❤️**