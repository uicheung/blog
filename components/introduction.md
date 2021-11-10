# 前言

::: danger 注意事项

- 组件的 `defaultXXX` 属性不要使用，`ant-design-vue 2.2` 版本之后将会逐步移除。二次封装的组件也不兼容 `defaultXXX` 属性。
- 其 kebab-case 格式的 `<my-component>` 同样能在模板中使用。我们强烈建议使用 PascalCase 格式以保持一致性。同时也有助于区分原生的自定义元素。
- [参考](https://v3.cn.vuejs.org/)

:::

## Usage

该项目的组件大部分没有进行全局注册。采用了按需引入注册方式，如下

```vue
<template>
  <ConfigProvider>
    <router-view />
  </ConfigProvider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ConfigProvider } from 'ant-design-vue';
  export default defineComponent({
    name: 'App',
    components: { ConfigProvider },
  });
</script>
```
