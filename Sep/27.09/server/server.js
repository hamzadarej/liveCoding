/*npm init -y
echo "PORT=5000\nDB_URL=mongodb://localhost:27017/users" > .env
echo "node_modules/" > .gitignore
npm i express
npm i dotenv
npm i morgan
npm i mongoose
npm i bcrypt
npm i cookie-parser
npm i express-session
npm i express-validator
npm i uuid
npm i multer
npm i concurrently
npm i nodemon --save-dev
mkdir server
touch server/server.js server/app.js
mkdir server/models server/controllers
touch server/models/userModel.js
touch server/controllers/userController.js
npx create-react-app client
    "start": "node server/server.js",
    "server": "nodemon server/server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently  \"npm run server\" \"npm run client\""

*/

require("dotenv").config();
const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
