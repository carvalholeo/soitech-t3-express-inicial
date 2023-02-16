const execSync = require('child_process').execSync;

function doSeed() {
  execSync('npx sequelize-cli db:seed:all');
}

module.exports = doSeed;
