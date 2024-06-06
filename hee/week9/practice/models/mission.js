'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mission extends Model {
    static associate(models) {
      Mission.belongsTo(models.Shop, { foreignKey: 'shopId' });
    }
  }
  Mission.init({
    shopId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    isCompleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Mission',
  });
  return Mission;
};
