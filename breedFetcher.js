const request = require("request");

// GET /breeds 
// https://api.thecatapi.com/v1/images/search?breed_id=beng will show bengal cat as results
//https://api.thecatapi.com/v1/breeds/search will allow us to search breeds

const breedName = process.argv.slice(2);

// const getBreedUrl = () => {
//   const baseUrl = 'https://api.thecatapi.com/v1/breeds/search?';
//   const breedName = process.argv.slice(2);
//   const queryString = `q=${breedName}`;
//   const url = `${baseUrl}${queryString}`;
//   return url;
// };


const fetchBreedDescription = (breedName, callback => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      console.log(error.message, null);
    };
    const desc = JSON.parse(body);
    if (desc[0]) {
      console.log(null, desc[0].description);
    };
  }
  );
});

fetchBreedDescription();

module.exports = fetchBreedDescription;