import db from '../db/conexao';
import { Sequelize, DataTypes, Model } from 'sequelize';
import Cliente from './cliente';

const Telefone = db.define("telefone", {
  idTelefone: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  ddd: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Telefone.belongsTo(Cliente, { foreignKey: 'idCliente' }); 

export default Telefone;