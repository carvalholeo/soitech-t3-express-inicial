'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true
    },
    telefone: DataTypes.STRING(20),
    usuario: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    dataNascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    estaAtivo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    nivel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Users',
    freezeTableName: true
  });
  return Usuario;
};