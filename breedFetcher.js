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


// const fetchBreedDescription = (breedName, (error, desc) => {
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
//     if (error) {
//       return (error.message, null);
//     };
//     const desc = JSON.parse(body);
//     if (desc[0]) {
//       return (null, desc[0].description);
//     };
//   }
//   );
// });


//fixed to include callback function
const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error.message, null);
    } else {
      const desc = JSON.parse(body);
      if (desc[0]) {
        callback(null, desc[0].description);
      } else {
        callback(`Breed ${breedName} not found.`, null);
      }
    }
  });
};

// define the callback function
const handleBreedDescription = (error, description) => {
  if (error) {
    console.error(error);
  } else {
    console.log(description);
  }
};

// call the fetchBreedDescription function with the callback function
fetchBreedDescription('siamese', handleBreedDescription);


module.exports = fetchBreedDescription;