'use strict';
import { DataTypes } from 'sequelize'
import sequelize from './index.mjs';
import Post from './post.mjs';

const User = sequelize.define(
  'User',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
    paranoid: true,
  },
);

Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });


export default User;
