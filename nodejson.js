const {readFileSync, read, readFile} = require('fs')
var loadjson = ()=>JSON.parse(readFileSync('movie.json'))
var data = readFileSync('movie.json')
console.log(JSON.parse(data)['movies'][0])
module.exports = {loadjson};