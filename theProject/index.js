const express = require("express");
const dotenv = require("dotenv");

dotenv.config({quiet: true});
const app = express();

const port = process.env.PORT || 8989;

app.get("/", (_, res) => {
  res.send(new Date().getTime())
})

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
