import Joi from "joi";
import { ERROR_CODES } from "../../constants/responseStatusCodes.mjs";

const userSchema = {
  params: Joi.object({
    id: Joi.number().required(),
  }),
  query: Joi.object({
    limit: Joi.string(),
    page: Joi.string(),
  })
}

export const userSchemaValidator = {
  params: (req, res, next) => {
    const validation = userSchema.params.validate(req.params);
    if (!validation.error) {
      next();
    } else {
      res.status(ERROR_CODES.BAD_REQUEST).send(validation.error)
    }
  },
  query: (req, res, next) => {
    const validation = userSchema.query.validate(req.query);
    if (!validation.error) {
      next();
    } else {
      res.status(ERROR_CODES.BAD_REQUEST).send(validation.error)
    }
  }
}
