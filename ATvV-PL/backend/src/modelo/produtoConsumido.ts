import db from '../db/conexao';
import { Sequelize, DataTypes, Model } from 'sequelize';
import Cliente from './cliente';
import Pet from './pet';
import Produto from './produto';

const ProdutoConsumido = db.define("produtoconsumido", {
  idProdutoConsumido: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

ProdutoConsumido.belongsTo(Produto, { foreignKey: 'idProduto' });
ProdutoConsumido.belongsTo(Pet, { foreignKey: 'idPet' });
ProdutoConsumido.belongsTo(Cliente, { foreignKey: 'idCliente' });

export default ProdutoConsumido;