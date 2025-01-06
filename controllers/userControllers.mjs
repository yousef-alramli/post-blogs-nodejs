import { SUCCESS_CODES } from "../constants/responseStatusCodes.mjs";
import User from "../models/user.mjs";

export const getMultiUsers = async (req, res) => {
  const { limit, page } = req.query;

  const users = await User.findAndCountAll({
    offset: limit * page || 0,
    limit: limit || 10,
    order: [['id', 'ASC']]
  })
  res.status(SUCCESS_CODES.OK).send(users);
}

export const getUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.status(SUCCESS_CODES.OK).send(user);
}

export const editUsers = async (req, res) => {
  await User.update(req.body, {
    where: {
      id: req.params.id
    }
  });

  res.status(SUCCESS_CODES.OK).send('Updated');
}

export const deleteUsers = async (req, res) => {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(SUCCESS_CODES.NO_CONTENT).send();
}
