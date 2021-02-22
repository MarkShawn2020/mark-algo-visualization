# 南川算法可视化

## 项目目标
致力于打造国内最好的算法可视化网站，普及算法知识，培养算法思维，提高算法能力。

## 技术栈
### 整体框架
目前前端使用 next 框架，语言是 typescript。

### UI框架
antd 为主体，算法演示部分可能使用 echarts 或者 d3。


## 算法清单

### 图论
#### 最短路径算法
- [ ] dijkstra
- [ ] Bellman-Ford
- [ ] SPFA
- [ ] floyd

### 红黑树

### 数论

## 加入项目
- 本项目是长期项目，欢迎 issue、pr、star与fork

## 联系我
- Email: 877210964@qq.com
- Wechat: MarkShawn2020
- 公众号：南川笔记

## Configure History
```
# typescript support
npm install --save-dev typescript

# antd support
# - [Use in TypeScript - Ant Design](https://ant.design/docs/react/use-in-typescript)
yarn add antd
yarn create react-app antd-demo-ts --template typescript
npm install --save @ant-design/icons

# tailwindcss support
# - [Install Tailwind CSS with Next.js - Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```