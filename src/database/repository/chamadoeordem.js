'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChamadoEOrdem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ChamadoEOrdem.belongsTo(models.Servico, {
        foreignKey: 'id_servico',
        as: 'pivot_servico'
      });

      ChamadoEOrdem.belongsTo(models.OrdensDeServico, {
        foreignKey: 'id_ordem',
        as: 'pivot_ordem'
      });
    }
  }
  ChamadoEOrdem.init({
    id_ordem: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    id_servico: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'ChamadoEOrdem',
    freezeTableName: true,
    tableName: 'ChamadosEOrdens',
    timestamps: false
  });

  ChamadoEOrdem.removeAttribute('id');
  return ChamadoEOrdem;
};