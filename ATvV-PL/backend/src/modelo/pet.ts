import db from '../db/conexao';
import Cliente from './cliente';
import { Sequelize, DataTypes, Model } from 'sequelize';

const Pet = db.define("pet", {
  idPet: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nomePet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoPet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  racaPet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  generoPet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Pet.belongsTo(Cliente, { foreignKey: 'idCliente' }); 

export default Pet;