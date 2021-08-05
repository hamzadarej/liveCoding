const openWeatherClient=require("./weather-client");
const myKey = require("../../config")
const APi_KEY =myKey.apiKey;
function formatData(data){
    const result =`it is now ${data.main.temp}\u0000C in ${data.name}, ${data.sys.country} Today's weather is ${data.weather.map((weather)=>weather.description).join(", ")}`;
    return result;
}
module.exports=async function weather(city,country){
    const client = new openWeatherClient(APi_KEY);
    const currentData = await client.getWeather(city,country);
    return formatData(currentData);

};
