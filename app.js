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
    console.log(`command: ${cmd}`)
    sh(cmd)
      .then((response) => {
        for (let line of response.stdout.split('\n')) {
          console.log(`stdout: ${line}`);
        }
        for (let line of response.stderr.split('\n')) {
          console.log(`stderr: ${line}`);
        }
        resolve()
      })
      .catch((err) => {
        console.log(`err: ${err}`)
        reject()
      })
    })
}

handleSh('echo "this is a new text file" > second.txt')
 .then(() => handleSh('git add .'))
 .then(() => handleSh('git commit -m "different commit"'))
 .then(() => handleSh('git push'))
