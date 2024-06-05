'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    static associate(models) {
      Shop.hasMany(models.Review, { foreignKey: 'shopId' });
      Shop.hasMany(models.Mission, { foreignKey: 'shopId' });
    }
  }
  Shop.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Shop',
  });
  return Shop;
};
