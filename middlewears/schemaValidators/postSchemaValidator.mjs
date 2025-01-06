import Joi from "joi";
import { ERROR_CODES } from "../../constants/responseStatusCodes.mjs";

const postSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    body: Joi.string().required(),
  }),
  params: Joi.object({
    id: Joi.number().required(),
  }),
  query: Joi.object({
    limit: Joi.string(),
    page: Joi.string(),
    ownPosts: Joi.boolean(),
  })
}

export const postSchemaValidator = {
  body: (req, res, next) => {
    const validation = postSchema.body.validate(req.body);
    if (!validation.error) {
      next();
    } else {
      res.status(ERROR_CODES.BAD_REQUEST).send(validation.error)
    }
  },
  params: (req, res, next) => {
    const validation = postSchema.params.validate(req.params);
    if (!validation.error) {
      next();
    } else {
      res.status(ERROR_CODES.BAD_REQUEST).send(validation.error)
    }
  },
  query: (req, res, next) => {
    const validation = postSchema.query.validate(req.query);
    if (!validation.error) {
      next();
    } else {
      res.status(ERROR_CODES.BAD_REQUEST).send(validation.error)
    }
  }
}
