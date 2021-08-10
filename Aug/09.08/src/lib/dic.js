const openDictionary = require("./DictionaryUser");
const myKey = require("../../config");
const APi_KEY = myKey.apiKey;
const APi_ID = myKey.apiId;

function formatData(data) {
  const result = data;

  return result;
}
module.exports = async function words(word) {
  const client = new openDictionary(APi_ID, APi_KEY);

  const data = await client.getWord(word);

  return formatData(data.results)}
