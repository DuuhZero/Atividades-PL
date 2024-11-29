import db from '../db/conexao';
import { Sequelize, DataTypes, Model } from 'sequelize';
import Cliente from './cliente';
import Pet from './pet';
import Servico from './servico';

const ServicoConsumido = db.define("servicoconsumido", {
  idServicoConsumido: {
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

ServicoConsumido.belongsTo(Cliente, { foreignKey: 'idCliente' });
ServicoConsumido.belongsTo(Pet, { foreignKey: 'idPet' });
ServicoConsumido.belongsTo(Servico, { foreignKey: 'idServico' });

export default ServicoConsumido;