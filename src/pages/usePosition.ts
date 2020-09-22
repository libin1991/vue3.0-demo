// usePosition.js
import { reactive, toRefs, onMounted, onUnmounted } from 'vue'

const usePosition = () => {
  const position = reactive({
    x: 0,
    y: 0
  })

  const updatePosition = (e:any) => {
      console.log(e)
    position.x = e.pageX
    position.y = e.pageY
  }

  onMounted(() => {
      console.log('mousemove')
    window.addEventListener('mousemove', updatePosition)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', updatePosition)
  })
  
  return toRefs(position) //必须使用toRefs，方式用的时候使用解构也是响应式的
}

export default usePosition

