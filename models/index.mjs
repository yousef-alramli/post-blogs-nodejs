'use strict';

import { Sequelize } from 'sequelize';
import config from '../config/config.mjs';

const sequelize = new Sequelize(config.development);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
