import { Watcher } from '../src/watcher'
import { reactive } from '../src/reactive'

const data = reactive({
  name: 'sabo'
})

new Watcher(() => {
  document.getElementById('app').innerHTML = `
    <p>请在控制台输入data，分别改变data.name尝试效果</p>
    <p>data.name被watch了，可以打印出新旧值的变化</p>
    msg is ${data.name} <br>
  `
})

window.data = data