# Periodic Table of Elements

一个交互式元素周期表网页应用，展示所有 118 个化学元素，支持中英文切换和明暗主题。

## 功能特性

- 🎨 **118 个元素** - 完整展示元素周期表所有元素
- 🌍 **双语支持** - 支持中文和英文界面切换
- 🌙 **主题切换** - 明暗主题自动切换
- 📊 **详细信息** - 点击元素查看详细属性（原子序数、原子量、分类、发现年份等）
- ⚛️ **3D 原子模型** - 使用 Three.js 实现玻尔模型和轨道模型可视化
- 🖱️ **交互体验** - 支持拖拽旋转和滚轮缩放

## 技术栈

- HTML5
- CSS3 (Glassmorphism 玻璃拟态设计)
- JavaScript (ES6+)
- Three.js (3D 渲染)

## 快速开始

直接在浏览器中打开 `index.html` 即可运行。

```bash
# 克隆项目
git clone https://github.com/Enco-shark/element_web.git

# 进入项目目录
cd element_web

# 使用浏览器打开
open index.html
```

## 使用说明

1. **查看元素** - 点击周期表中的任意元素查看详细信息
2. **切换语言** - 点击右上角的语言按钮 (EN/中)
3. **切换主题** - 点击右上角的主题按钮切换明暗模式
4. **3D 视图** - 在详情面板中切换 Bohr（玻尔模型）和 Orbital（轨道模型）视图
5. **旋转模型** - 拖拽 3D 视图区域旋转原子模型
6. **缩放模型** - 使用鼠标滚轮缩放视图

## 项目结构

```
element_web/
├── index.html          # 主页面
├── script.js           # 核心 JavaScript 逻辑
├── styles.css          # 样式文件
├── .gitignore          # Git 忽略配置
└── README.md           # 项目说明
```

## 元素分类

- 碱金属 (Alkali Metals)
- 碱土金属 (Alkaline Earth Metals)
- 过渡金属 (Transition Metals)
- 后过渡金属 (Post-transition Metals)
- 准金属 (Metalloids)
- 非金属 (Nonmetals)
- 卤素 (Halogens)
- 稀有气体 (Noble Gases)
- 镧系元素 (Lanthanides)
- 锕系元素 (Actinides)

## 许可证

MIT License