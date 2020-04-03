const randomNum = function* (range) {
    while (true) {
        let rand = Math.floor(Math.random() * range) + 1;
        yield rand;
    }
}

let rand100 = randomNum(100);
console.log(rand100.next())
let rand10 = randomNum(10)
console.log(rand10.next())