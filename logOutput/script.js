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
console.log(`${new Date().toISOString()}: ${randomStr}`);

setInterval(() => {
  console.log(`${new Date().toISOString()}: ${randomStr}`);
}, 5000);
