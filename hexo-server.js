const { spawn } = require('child_process');

const hexoServer = spawn('npm', ['run', 'server']);

hexoServer.stdout.on('data', function (data) {
  console.log(data.toString());
});

hexoServer.stderr.on('data', function (data) {
  console.log(data.toString());
});

hexoServer.on('exit', function (code) {
  console.log(code.toString());
});
