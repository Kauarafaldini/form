'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  clientes.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: DataTypes.STRING,
    usuario: DataTypes.STRING,
    fone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'clientes',
  });
  return clientes;
};