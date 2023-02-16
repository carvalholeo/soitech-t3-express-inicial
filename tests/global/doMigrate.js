const execSync = require('child_process').execSync;

function doMigrate() {
  execSync('npx sequelize-cli db:migrate');
}

module.exports = doMigrate;
