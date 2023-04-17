const fetchBreedDescription = require('./breedFetcher.js');

const breedName = process.argv.slice(2);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});