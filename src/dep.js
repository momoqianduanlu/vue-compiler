/**
 * 通过Dep来完成依赖收集和派发更新
 */
 export class Dep {
   constructor() {
     this.deps = new Set()
   }
   depend() {
    this.deps.add(Dep.target)
   }
   notify() {
    this.deps.forEach(watcher => {
      watcher.update()
    })
   }
 }

 // 记录当前正在运行的watcher
 Dep.target = null

 const targetStack = []

export function pushTarget(_target) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = _target
}

export function popTarget() {
  Dep.target = targetStack.pop()
}