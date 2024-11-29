import db from '../db/conexao';
import { Sequelize, DataTypes, Model } from 'sequelize';

const Cliente = db.define("cliente", {
  idCliente: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nomeCliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nomeSocialCliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Cliente;