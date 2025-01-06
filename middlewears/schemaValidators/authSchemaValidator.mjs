import Joi from "joi";
import { ERROR_CODES } from "../../constants/responseStatusCodes.mjs";

const authSchema = {
  register: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(8).required(),
  }),
  login: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
}

export const authSchemaValidator = {
  register: (req, res, next) => {
    const validation = authSchema.register.validate(req.body);
    if (!validation.error) {
      next();
    } else {
      res.status(ERROR_CODES.BAD_REQUEST).send(validation.error)
    }
  },
  login: (req, res, next) => {
    const validation = authSchema.login.validate(req.body);
    if (!validation.error) {
      next();
    } else {
      res.status(ERROR_CODES.BAD_REQUEST).send(validation.error)
    }
  }
}
