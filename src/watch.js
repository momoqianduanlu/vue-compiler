import { Watcher } from './watcher'

export function watch(getter, callback) {
 new Watcher(getter, { watch: true, callback })
}