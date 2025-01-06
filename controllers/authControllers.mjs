import jwt from 'jsonwebtoken'
import User from '../models/user.mjs';
import bcrypt from 'bcrypt';
import { ERROR_CODES, SUCCESS_CODES } from '../constants/responseStatusCodes.mjs';

const generateUserToken = (user) => {
  delete user.dataValues.password;
  user.dataValues.token = jwt.sign({ user }, process.env.JWT_SECRET);
  return user.dataValues;
}

export const login = async (req, res) => {
  const loginUser = await User.findOne({
    where: {
      email: req.body.email
    }
  });

  if (!loginUser) {
    res.status(ERROR_CODES.UNAUTHORIZED).send('Wrong email or password');
    return;
  }

  bcrypt.compare(req.body.password, loginUser.password, async (err, result) => {
    if (result) {
      res.status(SUCCESS_CODES.OK).send(generateUserToken(loginUser));
    } else {
      res.status(ERROR_CODES.UNAUTHORIZED).send('Wrong email or password');
    }
  });
}

export const register = async (req, res) => {
  const body = req.body;
  const userExist = await User.findOne({
    where: {
      email: body.email
    }
  });

  if (userExist) {
    res.status(ERROR_CODES.CONFLICT).send('Email already used');
    return;
  }

  bcrypt.hash(body.password, 10, async (err, hash) => {
    body.password = hash;
    const newUser = await User.create(body);
    res.status(SUCCESS_CODES.CREATED).send(generateUserToken(newUser));
  });
}
