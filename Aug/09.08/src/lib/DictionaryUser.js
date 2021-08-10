const axios = require("axios");

class OpenDictionary {
  constructor(apiId, apiKey) {
    this.apiKey = apiKey;
    this.apiId = apiId;

    this.baseURL = "https://od-api.oxforddictionaries.com/api/v2/";
    this.language_code = "en-gb";
    this.entries = "entries";
    this.client = axios.create({
      baseUrl: this.baseURL,
      headers: { app_id: this.apiId, app_key: this.apiKey },
    });
  }
  async get(endpoint) {
    const data = await this.client
      .get(endpoint)
      .then((res) => res.data,console.log(res.data))
      .catch(({ response }) => Promise.reject(response));
    return data;
  }

  async getWord(word) {
    const endpoint = `${this.entries}/${this.language_code}/${word}`;
    
    return await this.get(endpoint);
  }
}
module.exports = OpenDictionary;
