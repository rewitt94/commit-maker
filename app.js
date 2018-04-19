var exec = require('child_process').exec;

function sh(cmd) {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

function handleSh(cmd) {
  return new Promise((resolve,reject) => {
    sh(cmd)
      .then((stdout) => {
        // for (let line of stdout.split('\n')) {
          console.log(stdout)
          console.log(typeof stdout)
          console.log(`stdout: ${stdout}`);
        // }
        resolve()
      })
      .catch((err) => {
        console.log(err)
        reject()
      })
    })
}

handleSh('echo "this is a new text file" > second.txt')
 .then(() => handleSh('git add .'))
 .then(() => handleSh('git commit -m "woooo"'))
 .then(() => handleSh('git push'))
