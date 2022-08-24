const { execSync } = require('child_process');

console.log(execSync('npm run server').toString());