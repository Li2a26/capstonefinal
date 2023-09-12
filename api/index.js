const cors = require("cors");
const bodyParser = require("body-parser");
const Router = require("./routes/routes");
const express = require("express");
const app = express();

app.use(
  express.json(),
  cors({ origin: '*' }), // Allow requests from any origin
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  Router
);

app.listen(5000, () => console.log('Server running at http://localhost:5000'));