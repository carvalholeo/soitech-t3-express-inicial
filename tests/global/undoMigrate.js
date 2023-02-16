const execSync = require('child_process').execSync;

function undoMigrate() {
  execSync('npx sequelize-cli db:migrate:undo:all');
}

module.exports = undoMigrate;
