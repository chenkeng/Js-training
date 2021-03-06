/**
 * 完成函数 driveCustomers，它接受不定数量的参数，这是参数都是函数，每个函数代表一个人。这些函数都接受一个回调函数作为参数，当回调函数被调用的时候说明这个人已经上车了，回调函数会被传入人名。例如：
 * const MissLi = (callback) => {
 *   setTimeout(() => {
 *     callback('MissLi')
 *   }, 10) // 上车时间不一定
 * }
 * 
 * const MrWang = (callback) => {
 *   setTimeout(() => {
 *     callback('MrWang')
 *   }, 3) // 上车时间不一定
 * }
 * 
 * // ..
 * 
 * driveCustomers(MissLi, MarWang, ...)
 * 请你完成 driveCustomers 函数，它的作用是：当人都到齐以后，按上车的时间顺序把人名放到一个数组里面然后传给 drive 函数，正式开车。例如：drive(['MrWang', 'MissLi'])。
 * 
 * 你只需要完成 driveCustomers 函数，drive 函数已经可以直接使用。 
 */

const driveCustomers = (...fns) => {
    let customers = []
    const promises = fns.map(fn => new Promise((resolve) => {
        fn((p) => {
            customers.push(p)
            resolve()
        })
    }));
    Promise.all(promises).then(() => {
        drive(customers)
    })
}