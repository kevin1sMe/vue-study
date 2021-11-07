<template>
    <div>
        <!-- <h1 @click="add">{{ count }}</h1> -->
        <input type="text" v-model="title" @keydown.enter="addTodo" />
        <ul v-if="todos.length">
            <li v-for="todo in todos">
                <input type="checkbox" v-model="todo.done" />
                <span :class="{ done: todo.done }">{{ todo.title }}</span>
            </li>
        </ul>
        <div v-else>暂无数据</div>
        <div>
            全选
            <input type="checkbox" v-model="allDone" />
            <span>{{ active }} / {{ all }}</span>
        </div>
    </div>
</template>


<script setup>
import { ref, computed } from 'vue'
let title = ref("")
let todos = ref([
    { title: '学习Vue', done: false },
    { title: '睡觉', done: false },
    { title: '看EDG夺完', done: false },

])
function addTodo() {
    todos.value.push({
        title: title.value,
        done: false
    })
    title.value = "";
}

function clear() {
    todos.value = todos.value.filter(todo => !todo.done)
}

let active = computed(() => {
    return todos.value.filter(todo => !todo.done).length
})

let all = computed(() => {
    return todos.value.length
})

let allDone = computed({
    // 作为checkbox的状态，get返回的true/false表示是否选中。这里所有都选中时，返回true，否则返回false
    get() {
        // 有一个未选中时，返回false
        // return !todos.value.any(todo => !todo.done) // 不支持any?
        // 全部都是true时返回true
        // return todos.value.every(todo => todo.done)
        // 活跃（未选中/完成）为0时，即全完成
        // return active.value === 0
        // 等价于如下
        // return todos.value.filter(todo => !todo.done).length === 0
    },
    set(value) {
        todos.value.forEach(todo => todo.done = value)
    }
})
</script>

<style>
h1 {
    color: red;
}
</style>