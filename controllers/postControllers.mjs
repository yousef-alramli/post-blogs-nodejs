import { SUCCESS_CODES } from "../constants/responseStatusCodes.mjs";
import Post from "../models/post.mjs";
import User from "../models/user.mjs";

export const getMultiPosts = async (req, res) => {
  const { limit, page, ownPosts } = req.query;
  const where = {};
  if (ownPosts && JSON.parse(ownPosts)) {
    where.userId = req.user.id;
  }

  const posts = await Post.findAndCountAll({
    where,
    include: { model: User, as: 'user' },
    offset: limit * page || 0,
    limit: limit || 5,
    order: [['id', 'ASC']]
  });

  res.status(SUCCESS_CODES.OK).send(posts);
}

export const getPost = async (req, res) => {
  const post = await Post.findByPk(req.params.id, {
    include: { model: User, as: 'user' },
  });
  res.status(SUCCESS_CODES.OK).send(post);
}

export const createPost = async (req, res) => {
  const body = { ...req.body, userId: req.user.id };
  const newPost = await Post.create(body);

  res.status(SUCCESS_CODES.CREATED).send(newPost);
}

export const editPosts = async (req, res) => {
  await Post.update(req.body, {
    where: {
      id: req.params.id
    }
  });

  res.status(SUCCESS_CODES.OK).send('Updated');
}

export const deletePosts = async (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(SUCCESS_CODES.OK).send('');
}
