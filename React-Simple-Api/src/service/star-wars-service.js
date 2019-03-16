
const url = 'https://swapi.co/api/people/';

export const getPeople=()=>{
    return fetch(url)
  .then(response =>  response.json())
  .then(data => data.results)
  .catch(err => {
    console.error(err)
  })
};