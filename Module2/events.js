
const fs = require('fs');

const path = require('path');

const filePath = path.join(__dirname, 'hello.txt');

fs.writeFileSync(filePath, 'ki koro , valo aco , mone ki pore na amake',);

const fileCOn = fs.readFileSync(filePath, "utf-8");

console.log(fileCOn);