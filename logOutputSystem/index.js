const fs = require("fs");
const string = `${new Date().toISOString()} - ${Math.random()
  .toString(36)
  .slice(2)}`;

fs.writeFileSync("/usr/src/app/files/log-output.txt", string);

setInterval(() => {
  fs.writeFileSync("/usr/src/app/files/log-output.txt", string);
}, 5000);
