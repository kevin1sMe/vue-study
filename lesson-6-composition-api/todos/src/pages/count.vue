<template>
    <h1>这是展示计数器和样式表引用变量</h1>
    <h1 @click="add">{{ count }}</h1>
</template>

<!--  这里展示一个组件的使用方法 -->
<script setup>
import { ref } from 'vue';
let count = ref(1);
let color = ref('red');
function add() {
    count.value++;
    color.value = Math.random() > 0.5 ? 'red' : 'blue';
}

</script>

<style>
h1 {
    color: v-bind(color);
}
</style>