// src/core/instance/lifecycle.js
// callhook 函数的功能就是在当前vue组件实例中，调用某个生命周期钩子注册的所有回调函数。
// vm:Vue实例
// hook:生命周期名字

export function callHook(vm: Component, hook: string) {
    pushTarget()
    const handlers = vm.$options[hook]
    // 初始化合并 options 的过程 、，将各个生命周期函数合并到 options 里
    const info = `${hook} hook`
    if (handlers) {
        for (let i = 0, j = handlers.length; i < j; i++) {
            invokeWithErrorHandling(handlers[i], vm, null, vm, info)
        }
    }
    if (vm._hasHookEvent) {
        vm.$emit('hook:' + hook)
    }
    popTarget()
}