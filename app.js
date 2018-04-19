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

handleSh('echo "this is a new text file" > file.txt')
 .then(() => handleSh('git add .'))
 .then(() => handleSh('git commit -m "Completely manual commit"'))
 .then(() => handleSh('git push'))
