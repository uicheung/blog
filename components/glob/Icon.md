# Icon

封装 Icon 组件，且使用相同的组件名替换全局的 `ComIcon` 组件

::: tip

- 按钮需要手动 import，使用 `com-icon` 标签


:::

## Usage

```vue
<template>
  <ComIcon class="settings" icon="settings-3-fill" />
</template>
```

## Props

::: tip 提示

**保持** [icon](http://www.remixicon.cn/) **原有功能**的情况下扩展以下属性

:::

| 属性 | 类型                           | 默认值 | 说明                     |
| ---- | ------------------------------ | ------ | ------------------------ |
| icon | `'string'` | -      | icon状态 |
