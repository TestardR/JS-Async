/* function* genTest() {
    let x = 0;
    console.log("start");
    yield x++;
    console.log(x);
    x++;
    console.log(x);
    yield x++;
    console.log(x);
    return x;
}

let gen = genTest();
console.log(gen.next())
gen.next();
console.log(gen.next())
 */

const test = function* () {
    yield 10
    yield 20
    yield 30
}

let it = test();
console.log(it.next())
console.log(it.next())
console.log(it.next())