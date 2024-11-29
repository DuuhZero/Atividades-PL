import { Sequelize } from 'sequelize';
import mysql from 'mysql2/promise';

const createDatabase = async () => {
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'anuubiss1',
  });

  await connection.query('CREATE DATABASE IF NOT EXISTS atividade5');

  console.log('Banco de Dados criado com sucesso');

  await connection.end();
};

createDatabase();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'anuubiss1',
  database: 'atividade5',
  define: {
    timestamps: true,
    freezeTableName: true,
  },
});

export default sequelize;