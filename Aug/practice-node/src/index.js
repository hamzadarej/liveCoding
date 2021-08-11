var axios = require("axios").default;
const args = process.argv.slice(2);
const [country]=args;
var options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
  params: {query: country},
  headers: {
    'x-rapidapi-key': 'c6038616b6mshaf3a1592850f1bep1a6181jsn10d5dcf4bbee',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});