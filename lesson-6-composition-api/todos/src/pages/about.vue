<template>
    <h1>这是关于页, 展示了组件的使用方法</h1>
    <h2>鼠标位置： {{ x }} - {{ y }}</h2>
</template>

<!--  这里展示一个组件的使用方法 -->
<script setup>
import { useMouse } from '../utils/mouse'
let { x, y } = useMouse()
</script>