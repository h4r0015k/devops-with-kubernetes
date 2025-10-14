const express = require("express");
const dotenv = require("dotenv");

dotenv.config({quiet: true});
const app = express();

const port = process.env.PORT || 8989;

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
