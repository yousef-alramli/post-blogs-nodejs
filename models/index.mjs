'use strict';

import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  database: "defaultdb",
  username: "avnadmin",
  password: "AVNS_VXkumtITzcmP8GuQOV9",
  host: 'pg-post-blog-post-blog.l.aivencloud.com',
  dialect: 'postgres',
  port: 26682,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
