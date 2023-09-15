const cors = require("cors");
const bodyParser = require("body-parser");
const Router = require("./routes/routes");
const express = require("express");
const app = express();
const {ErrorHandling} = require('./middleware/ErrorHandling')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Request-Methods", "*")
  res.header("Access-Control-Allow-Headers", "*")
  res.header("Access-Control-Expose-Headers", "Authorization")
  next();
});

app.use(
  express.json(),
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  Router
);

app.listen(5000, () => console.log('Server running at http://localhost:5000'));