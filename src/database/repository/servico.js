'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Servico.belongsToMany(models.OrdensDeServico, {
        through: models.ChamadoEOrdem,
        foreignKey: 'id_servico',
        // targetKey: 'id_servico',
        as: 'servicos_ordens'
      });
    }
  }
  Servico.init({
    descricao: DataTypes.STRING(50),
    valor: DataTypes.DECIMAL(8,2),
    prazo_execucao: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Servico',
  });
  return Servico;
};