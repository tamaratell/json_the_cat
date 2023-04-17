const request = require("request");

// GET /breeds 
// https://api.thecatapi.com/v1/images/search?breed_id=beng will show bengal cat as results
//https://api.thecatapi.com/v1/breeds/search will allow us to search breeds


const getBreedUrl = () => {
  const baseUrl = 'https://api.thecatapi.com/v1/breeds/search?';
  const breed = process.argv.slice(2);
  const queryString = `q=${breed}`;
  const url = `${baseUrl}${queryString}`;
  return url;
};

request(getBreedUrl(), (error, response, body) => {
  const data = JSON.parse(body);
  try {
    //tryStatements
    const breedInformation = (data[0]).description;
    console.log(breedInformation);
  } catch (error) {
    //catchStatements
    console.error('Error:', error.message);
  }

});
