# 人人网 - SvelteKit 社交平台

🎉 基于现代技术栈构建的人人网风格社交网络平台

## ✨ 功能特性

### 🏠 核心功能
- **📱 动态发布** - 分享文字、图片、音乐、视频
- **👥 好友系统** - 好友管理、在线状态、共同好友
- **📷 相册管理** - 照片上传、相册分类、隐私设置
- **📝 个人主页** - 个人信息、动态时间线
- **🔄 内容分享** - 好友动态、热门内容推荐

### 🎨 界面设计
- **人人网风格** - 经典的蓝色主题配色
- **响应式设计** - 完美适配移动端和桌面端
- **现代化UI** - 使用Tailwind CSS构建
- **流畅动画** - 悬停效果、过渡动画

### 🛠️ 技术亮点
- **TypeScript** - 类型安全的开发体验
- **组件化架构** - 可复用的UI组件库
- **模块化设计** - 清晰的代码组织结构
- **性能优化** - 快速加载和渲染

## 🚀 技术栈

### 前端框架
- **SvelteKit** - 全栈Svelte框架
- **TypeScript** - 静态类型检查
- **Vite** - 快速构建工具

### 样式与UI
- **Tailwind CSS v3** - 原子化CSS框架
- **PostCSS** - CSS处理工具
- **自定义CSS变量** - 人人网主题色彩

### 开发工具
- **ESLint** - 代码质量检查
- **Git Hooks** - 提交前检查
- **VS Code** - 推荐开发环境

## 📱 响应式设计

### 移动端 (< 768px)
- 单列布局
- 触摸友好的按钮
- 优化的导航体验

### 平板端 (768px - 1024px)
- 两列好友布局
- 适配的组件尺寸
- 平衡的视觉效果

### 桌面端 (> 1024px)
- 多列网格布局
- 悬停交互效果
- 充分利用屏幕空间

## 📁 项目结构

```
src/
├── lib/
│   ├── components/          # 可复用组件
│   │   ├── ui/             # UI基础组件
│   │   │   ├── avatar/     # 用户头像组件
│   │   │   ├── button/     # 按钮组件
│   │   │   ├── card/       # 卡片组件
│   │   │   └── ...
│   │   ├── Albums.svelte   # 相册组件
│   │   ├── Friends.svelte  # 好友组件
│   │   ├── StatusComposer.svelte # 状态发布器
│   │   └── ...
│   ├── data.ts             # 模拟数据
│   ├── types.ts            # TypeScript类型
│   └── utils.ts            # 工具函数
├── routes/                  # 页面路由
│   ├── +layout.svelte      # 全局布局
│   ├── +page.svelte        # 首页
│   ├── friends/            # 好友页面
│   ├── albums/             # 相册页面
│   └── ...
├── app.css                 # 全局样式
└── app.html               # HTML模板
```

## 🛠️ 快速开始

### 环境要求
- **Node.js** >= 18.0.0
- **npm** >= 8.0.0 或 **pnpm** >= 7.0.0

### 安装依赖
```bash
npm install
# 或
pnpm install
```

### 开发环境
```bash
npm run dev
# 或
pnpm run dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看应用

### 构建生产版本
```bash
npm run build
# 或
pnpm run build
```

### 预览生产版本
```bash
npm run preview
# 或
pnpm run preview
```

## 🎨 主题定制

### CSS变量
项目使用CSS变量定义人人网主题色彩：

```css
:root {
  --renren-blue: #005EAC;      /* 人人网经典蓝 */
  --renren-border: #e5e7eb;    /* 边框颜色 */
  --renren-bg: #f8f9fa;         /* 页面背景 */
}
```

### 组件样式
所有组件都使用Tailwind CSS构建，可以通过修改 `tailwind.config.js` 进行主题定制。

## 📦 组件库

### UI组件
- **Avatar** - 用户头像组件，支持图片和文字fallback
- **Button** - 按钮组件，多种变体和尺寸
- **Card** - 卡片组件，用于内容展示
- **Input** - 输入框组件
- **Textarea** - 文本域组件

### 业务组件
- **StatusComposer** - 状态发布器，支持表情和多媒体
- **FeedList** - 动态列表，分页加载
- **Friends** - 好友网格，响应式布局
- **Albums** - 相册展示，多种布局模式

## 🌟 核心特性详解

### 📝 StatusComposer (状态发布器)
- 支持文字输入和表情选择
- 多媒体上传（图片、音乐、视频）
- 实时字符计数
- 表情面板快速选择

### 👥 Friends (好友系统)
- 响应式网格布局
- 在线状态显示
- 共同好友统计
- 快捷操作按钮

### 📷 Albums (相册管理)
- 多种视图模式
- 隐私级别设置
- 批量操作支持
- 图片懒加载

## 🚀 部署指南

### Vercel部署
1. 连接GitHub仓库到Vercel
2. 设置构建命令：`npm run build`
3. 设置输出目录：`build`
4. 部署完成

### Netlify部署
1. 连接GitHub仓库到Netlify
2. 设置构建命令：`npm run build`
3. 设置发布目录：`build`
4. 部署完成

### 自托管部署
```bash
# 构建项目
npm run build

# 使用预览服务器
npm run preview

# 或使用其他静态服务器
npx serve build
```

## 🤝 贡献指南

### 开发流程
1. Fork 项目仓库
2. 创建功能分支：`git checkout -b feature/new-feature`
3. 提交更改：`git commit -m 'Add new feature'`
4. 推送分支：`git push origin feature/new-feature`
5. 创建 Pull Request

### 代码规范
- 使用TypeScript进行类型检查
- 遵循ESLint规则
- 组件使用PascalCase命名
- 保持一致的代码风格

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- [Svelte](https://svelte.dev/) - 现代化的前端框架
- [SvelteKit](https://kit.svelte.dev/) - 全栈应用框架
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [Vite](https://vitejs.dev/) - 快速的构建工具

---

**人人网重现项目** - 用现代技术栈致敬经典社交平台 🚀

如果这个项目对你有帮助，请给个 ⭐ Star！