import { Router } from 'express';
import { login, register } from "../controllers/authControllers.mjs";
import { authSchemaValidator } from '../middlewears/schemaValidators/authSchemaValidator.mjs';

export const authRoutes = new Router({ mergeParams: true });

authRoutes.post('/login', authSchemaValidator.login, login);

authRoutes.post('/register', authSchemaValidator.register, register);
