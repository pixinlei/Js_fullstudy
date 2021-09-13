function iteratorGenerator(list) {
    let index = 0
    let len = list.length

    return {
        next: function () {
            let done = index >= len

            let value = !done ? list[index++] : undefined

            return {
                done,
                value
            }
        }
    }
}

let iterator = iteratorGenerator([1,2,3])

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());