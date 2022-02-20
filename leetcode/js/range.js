function isEmpty(value) {
    if (typeof value === 'string') {
        return value.length === 0
    }

    if (typeof value === 'object' && value !== null) {

        if (value instanceof Set || value instanceof Map) {
            return value.size === 0
        }

        return Object.keys(value).length === 0
    }
    return true
}

// console.log(isEmpty(null))
// console.log(isEmpty(true))
// console.log(isEmpty(1))
// console.log(isEmpty([1, 2, 3]))
// console.log(isEmpty({ 'a': 1 }))
// console.log(isEmpty('123'))
// console.log(isEmpty(123))
// console.log(isEmpty(''))
// console.log(isEmpty(0))
//
// console.log(isEmpty([]))
// console.log(isEmpty({}))
// console.log(isEmpty(false))

console.log(isEmpty(new Map()))
console.log(isEmpty(new Set([[1, 2]])))
