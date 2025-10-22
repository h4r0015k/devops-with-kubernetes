const express = require("express");
const dotenv = require("dotenv");

dotenv.config({quiet: true});
const app = express();

const port = process.env.PONG_PORT || 9998;
let counter = 0;

app.get("/pingpong", (_, res) => {
  counter += 1;
  res.send(`pong ${counter}`)
})

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});
