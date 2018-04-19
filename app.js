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
  let { stdout } = await sh(cmd);
  for (let line of stdout.split('\n')) {
    console.log(`ls: ${line}`);
  }
}

runSh('git add .')
runSh('git commit -m "Automatic commit"')
