var Sequelize = require('sequelize');
var sequelize = require('./../db/db');

const Product = sequelize.define('product', {
    // attributes
    id_product: {
      primaryKey: true,
      type: Sequelize.BIGINT(11),
      allowNull: false
    },
    name_product: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    description_product: {
      type: Sequelize.TEXT('tiny'),
    },
    is_actived_product: {
      type: Sequelize.STRING(1),
      allowNull: false
    },
    imagen_product: {
      type: Sequelize.BIGINT(11),
    },
    codigo_product: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    tableName: 'products'
  });

module.exports = Product;