let arr = ['a', 'b', 'c', 'd'];

/* let it = arr[Symbol.iterator]();

console.log('Remaining Code.')

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next()) */

/* const arrIt = function* (arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arrIt[i]
    }
}


let it = arrIt(arr)

console.log('Remaining Code.')

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
 */
const str = "string"
const it2 = str[Symbol.iterator]()
console.log(it2.next())