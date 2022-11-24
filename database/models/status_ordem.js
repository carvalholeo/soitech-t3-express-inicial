'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status_Ordem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Status_Ordem.hasMany(models.OrdensDeServico, {
        foreignKey: 'status_da_ordem',
        as: 'statusordens_servicos'
      });
    }
  }
  Status_Ordem.init({
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Status_Ordem',
    tableName: 'Status_Ordens',
    freezeTableName: true,
    timestamps: false
  });
  return Status_Ordem;
};