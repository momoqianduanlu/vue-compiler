import { Dep, pushTarget, popTarget } from './dep'

export class Watcher {
  // 在这getter可以理解为渲染函数
  constructor(getter, options = {}) {
    const { computed, watch, callback } = options
    this.getter = getter
    this.watch = watch
    this.callback = callback
    this.value = undefined

    if (computed) {
      // computed拥有自己的dep
      this.dep = new Dep()
    } else {
      this.get()
    }
  }
  get() {
    // 设置当前正在运行的watcher
    pushTarget(this)
    this.value = this.getter()
    popTarget()
    return this.value
  }

  // 仅为computed使用
  depend() {
    this.dep.depend(this)
  }
  
  update() {
    if (this.computed) {
      this.get()
      this.dep.notify()
    } else if (this.watch) {
      const oldValue = this.value
      this.get()
      this.callback(oldValue, this.value)
    } else {
      this.get()
    }
  }
}