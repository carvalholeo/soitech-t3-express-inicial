'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cliente.hasMany(models.OrdensDeServico, {
        foreignKey: 'id_cliente',
        as: 'clientes_ordensdeservico'
      });
    }
  }
  Cliente.init({
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    documento: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true
    },
    dataNascimento: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};