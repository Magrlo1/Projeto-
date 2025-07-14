const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Caminhao = sequelize.define('Caminhao', {
  placa: { type: DataTypes.STRING(10), allowNull: false },
  motorista: { type: DataTypes.STRING(40), allowNull: false },
  transportadora: { type: DataTypes.STRING(40), allowNull: false },
  rota: { type: DataTypes.STRING(30), allowNull: false },
  vale: { type: DataTypes.STRING(12), allowNull: false },
  data_chegada: { type: DataTypes.DATEONLY, allowNull: false },
  chegada: { type: DataTypes.TIME, allowNull: false },
  data_saida: { type: DataTypes.DATEONLY, allowNull: false },
  saida: { type: DataTypes.TIME, allowNull: false },
  celular: { type: DataTypes.STRING(16), allowNull: false },
  baia: { type: DataTypes.STRING(12), allowNull: false },
  tara: { type: DataTypes.FLOAT, allowNull: false },
  status: { type: DataTypes.STRING(20), allowNull: false, defaultValue: 'Aguardando' }
}, {
  tableName: 'caminhoes',
  timestamps: true
});

module.exports = Caminhao;
