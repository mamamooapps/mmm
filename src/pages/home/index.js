// require('normalize.css/normalize.css')
// require('../css/main.css')
// require('./page.css')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})


async function fetchDogs() {
  const result = await fetch("https://dog.ceo/api/breeds/list/all"); 
  const jsonRes = result.json(); 
  console.log(jsonRes); 
}

const asdf = "fdsa"; 

console.log("asdf")
fetchDogs();