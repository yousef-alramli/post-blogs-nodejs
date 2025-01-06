'use strict';
import { DataTypes } from 'sequelize'
import sequelize from './index.mjs';

const Post = sequelize.define(
  'post',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'userId',
    },
  },
  {
    timestamps: true,
    deletedAt: true,
  },
);

export default Post;
