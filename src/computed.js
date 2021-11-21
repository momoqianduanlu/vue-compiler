import { Watcher } from './watcher'

export function computed(getter) {
  let def = {} // 用来存储computed的返回值
  const computedWatcher = new Watcher(getter, { computed: true })
  Object.defineProperty(def, 'value', {
    get() {
      // 计算属性watcher在这时收集了渲染watcher
      computedWatcher.depend()
      // 将Dep.target设置为computedWatcher
      return computedWatcher.get()
    }
  })
  return def
}
