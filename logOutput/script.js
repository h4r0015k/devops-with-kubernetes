const express = require("express")
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const chars = "abcdefghijklmnopqrstuvwxyz0123456789";

const randomGen = (str = "") => {
  if (str.length > 20) {
    return str;
  }

  if (str.length && !(str.length % 5)) {
    str += "-";
  }

  return randomGen(str + chars[Math.floor(Math.random() * chars.length)]);
};

const randomStr = randomGen();
const port = process.env.PORT;

app.get("/", (_, res) => {
  res.send(randomStr);
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})