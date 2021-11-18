import { pushTarget, popTarget } from './dep'

export class Watcher {
  // 在这getter可以理解为渲染函数
  constructor(getter) {
    this.getter = getter
    this.value = undefined
    this.get()
  }
  get() {
    // 设置当前正在运行的watcher
    pushTarget(this)
    this.value = this.getter()
    popTarget()
    return this.value
  }
  update() {
    this.get()
  }
}