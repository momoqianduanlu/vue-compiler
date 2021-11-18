/**
 * 只考虑数据是对象的情况，不考虑是数组
 */
import { Dep } from './dep'
import { isObject } from '../utils'

export function reactive(data) {
  if (isObject(data)) {
    Object.keys(data).forEach(key => {
      defineReactive(data, key)
    })
  }
  return data
}

// 1. 做数据劫持
function defineReactive(data, key) {
  let val = data[key]
  const dep = new Dep()

  if (isObject(val)) {
    reactive(val)
  }

  Object.defineProperty(data, key, {
    get() {
      dep.depend()
      return val
    },
    set(newVal) {
      val = newVal
      dep.notify()
    }
  })
}