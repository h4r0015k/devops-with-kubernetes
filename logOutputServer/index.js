const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const fs = require("fs");

const port = process.env.PORT;

app.get("/content", (_, res) => {
  try {
    const content = fs.readFileSync("/usr/src/app/files/log-output.txt");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(content);
    res.end();
  } catch (error) {
    res.send("something went wrong");
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
