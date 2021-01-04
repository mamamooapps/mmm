// require('normalize.css/normalize.css')
// require('../css/main.css')
// require('./page.css')
// const img = require('../img/unicorn.jpg')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-about')
})

async function fetchDogs() {
  const result = await fetch("https://dog.ceo/api/breeds/list/all"); 
  const jsonRes = result.json(); 
  console.log(jsonRes); 
}

const asdf = "fdsa"; 

console.log("asdf")
fetchDogs();