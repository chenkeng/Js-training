/**
 * 观察者模式在前端开发中非常常用，我们经常用的事件就是观察者模式的一种体现。
 * 它对我们解耦模块、开发基于消息的业务起着非常重要的作用。
 * Node.js 原生自带 EventEmitter 模块，可见它的重要性。
 * 
 * 完成 EventEmitter 模块，它是一个类，它的实例具有以下几个方法：on、emit、off：
 * 
 * on(eventName, func)：监听 eventName 事件，事件触发的时候调用 func 函数。
 * emit(eventName, arg1, arg2, arg3...)：触发 eventName 事件，并且把参数 arg1, arg2, arg3... 传给事件处理函数。
 * off(eventName, func)：停止监听某个事件。
 */

class EventEmitter {
    constructor() {
        this.handlers = {}
    }

    on(eventName, func) {
        let callbacks = eventName in this.handlers ? this.handlers[eventName] : []
        callbacks.push(func)
        this.handlers[eventName] = callbacks
    }

    emit(eventName, ...args) {
        if (!eventName in this.handlers) return
        const callbacks = this.handlers[eventName]
        callbacks.map(cb => {
            cb(...args)
        })
    }

    off(eventName, func) {
        if (!eventName in this.handlers) return
        let callbacks = this.handlers[eventName]
        let index = callbacks.indexOf(func)
        callbacks.splice(index, 1)
    }
}

const emitter = new EventEmitter()
const sayHi = (name) => console.log(`Hello ${name}`)
const sayHi2 = (name) => console.log(`Good night, ${name}`)

emitter.on('hi', sayHi)
emitter.on('hi', sayHi2)
emitter.emit('hi', 'ScriptOJ')