var exec = require('child_process').exec;

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */

async function sh(cmd) {
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

async function runSh(cmd) {
  // let { stdout } = await sh(cmd);
  //
  // }
}

// runSh('echo "this is a new file" > new.txt')
// runSh('git add .')
// runSh('git commit -m "Automatic commit"')
// runSh('git push')

sh('git add .')
  .then((stdout) => {
    console.log(stdout)
  // for (let line of stdout.split('\n')) {
  //   console.log(`stdout: ${line}`);
  // }
    sh('git commit -m "Automatic commit"')
})
