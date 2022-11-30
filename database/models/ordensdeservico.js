'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdensDeServico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrdensDeServico.belongsTo(models.Status_Ordem, {
        foreignKey: 'status_da_ordem',
        as: 'ordensdeservicos_statusordens'
      });

      OrdensDeServico.belongsTo(models.Cliente, {
        foreignKey: 'id_cliente',
        as: 'ordensdeservico_clientes'
      });

      OrdensDeServico.belongsTo(models.Usuario, {
        foreignKey: 'id_cadastrante',
        as: 'ordensdeservico_cadastrante'
      });

      OrdensDeServico.belongsTo(models.Usuario, {
        foreignKey: 'id_tecnico',
        as: 'ordensdeservico_tecnico'
      });

      OrdensDeServico.belongsToMany(models.Servico, {
        through: models.ChamadoEOrdem,
        foreignKey: 'id_ordem',
        // targetKey: 'id_ordem',
        as: 'ordens_servicos'
      });
    }
  }
  OrdensDeServico.init({
    data_abertura: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    solicitacao: DataTypes.STRING(100),
    data_encerramento: DataTypes.DATE,
    id_tecnico: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_cadastrante: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_da_ordem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    modelName: 'OrdensDeServico',
  });
  return OrdensDeServico;
};