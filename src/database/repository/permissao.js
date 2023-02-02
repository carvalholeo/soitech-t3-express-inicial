'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permissao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Permissao.hasMany(models.Usuario, {
        foreignKey: 'nivel_id',
        as: 'permissao_usuario'
      });
    }
  }
  Permissao.init({
    nome_permissao: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    administrar_servicos: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    alterar_tecnico: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    alterar_ordem: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    alterar_permissao: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    criar_ordem: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    encerrar_ordem: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    acessar_ordem: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    administrar_clientes: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    administrar_status_ordens: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    administrar_usuarios: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    criar_permissoes: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    criar_caixa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ver_caixa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    alterar_caixa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    apagar_caixa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    gerar_relatorios: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Permissao',
    tableName: 'Permissoes',
    freezeTableName: true
  });
  return Permissao;
};