const os = require("node:os");
const fs = require("fs");

const cpu = os.cpus();
const totalMem = os.totalmem();
const freeMem = os.freemem;

const byteToGigabyte = (data) => {
  return data / 1024 / 1024 / 1024;
};

const usedMem = totalMem - freeMem;
console.log(cpu.length);
console.log(byteToGigabyte(totalMem));
console.log(byteToGigabyte(freeMem));
console.log(usedMem);
console.log("nodemooon çalıştı");
