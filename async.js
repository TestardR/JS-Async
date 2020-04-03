const fetch = require("node-fetch");

const asyncFunction = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Romain')
        }, 1000)
    })
}
const asyncFunc = async () => {
    let result = await asyncFunction()
    console.log(result)
    return result
}

asyncFunc();

const swapiFilms = async function () {
    let url = "https://swapi.co/api/films/",
        filmsData = {},
        films = [];

    filmsData = await fetch(url).then(data => data.json())
    films = filmsData.results.map(film => film.title)

    console.log(films)
}

swapiFilms()

const moviePlanets = async function (movieNum) {
    let url = 'https://swapi.co/api/films/';
    try {
        if(isNaN(movieNum)) {
            throw 'You must pass a number !'
        }

        let movieObj = await fetch(url + movieNum + '/');
        let promises = movieObj.planets.map(url => fetch(url));
    
        for await (let planet of promises) {
            console.log(planet.name)
        }
    } catch (error) {
        console.log(error)
    }
  
}

moviePlanets('RR')