require('dotenv').config(); // this is important!
module.exports = {
  "development": {
    "database": "defaultdb",
    "username": "avnadmin",
    "password": "AVNS_VXkumtITzcmP8GuQOV9",
    "host": "pg-post-blog-post-blog.l.aivencloud.com",
    "dialect": "postgres",
    "port": 26682,
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  },
  "test": {
    "database": "defaultdb",
    "username": "avnadmin",
    "password": "AVNS_VXkumtITzcmP8GuQOV9",
    "host": "pg-post-blog-post-blog.l.aivencloud.com",
    "dialect": "postgres",
    "port": 26682,
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  },
  "production": {
    "database": "defaultdb",
    "username": "avnadmin",
    "password": "AVNS_VXkumtITzcmP8GuQOV9",
    "host": "pg-post-blog-post-blog.l.aivencloud.com",
    "dialect": "postgres",
    "port": 26682,
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  }
};