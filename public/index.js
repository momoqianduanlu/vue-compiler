import { Watcher } from '../src/watcher'
import { reactive } from '../src/reactive'
import { computed } from '../src/computed'

const data = reactive({
  name: 'sabo',
  number: 1
})

// new Watcher(() => {
//   document.getElementById('app').innerHTML = `
//     <p>请在控制台输入data，分别改变data.name尝试效果</p>
//     <p>data.name被watch了，可以打印出新旧值的变化</p>
//     name is ${data.name} <br>
//   `
// })

const numberPlusOne = computed(() => data.number + 1)

new Watcher(() => {
  document.getElementById('app2').innerHTML = `
  <p>请在控制台改变data.number尝试computed效果</p>
  <p>data.number现在是${data.number}</p>
    computed: 1 + number 是 ${numberPlusOne.value}
  `
})

window.data = data