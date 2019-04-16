var Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('db_devel', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;