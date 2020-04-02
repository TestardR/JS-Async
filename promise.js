let firstName = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Romain')
        }, 1000)
    })
}

let middleMan = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Marie')
        }, 2000)
    })
}

let lastName = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Testard')
        }, 3000)
    })
}

Promise.all([firstName(), middleMan(), lastName()]).then(res => console.log(res));

Promise.race([firstName(), middleMan(), lastName()]).then(res => console.log(res));

(async function () {

    let names = await Promise.all([firstName(), middleMan(), lastName()])
    console.log(names)

})();

(async function () {

    let name = await Promise.race([firstName(), middleMan(), lastName()])
    console.log(name)

})();