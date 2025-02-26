const os = require("os");

// To get current user information
const user = os.userInfo();
console.log(user);

// System uptime in second
console.log(`System uptime: ${os.uptime()}`);

const currentOd = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOd);
