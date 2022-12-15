# 如何开发

## 克隆项目

点击复制 Clone 的地址，并 cd 到保存该本地仓库的路径，运行以下命令：

```
git@github.com:NiceyLai/mango.git
```

## 安装依赖

cd 到本地仓库所在的目录中，运行以下命令：

安装 pnpm

```
npm install -g pnpm
```

安装相关依赖

```
pnpm i
```

## 本地预览

```
pnpm run dev
```

# 如何打包

## 编码规范

## ref 默认值

不推荐使用

```
const div = ref<HTMLDivElement>();
```

推荐使用

```
const div = ref<HTMLDivElement | null>(null);
```
