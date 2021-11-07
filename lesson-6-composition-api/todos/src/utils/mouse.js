import { ref, onMounted, onUnmounted } from 'vue'
// 组件加载的时候会触发onMounted/缷载时触发onUnmounted

export function useMouse() {
    const x = ref(0)
    const y = ref(0)

    function update(e) {
        x.value = e.pageX
        y.value = e.pageY
    }

    onMounted(() => {
        window.addEventListener('mousemove', update)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', update)
    })
    return { x, y }
}