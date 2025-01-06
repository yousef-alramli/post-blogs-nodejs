import { Router } from 'express';
import { deleteUsers, editUsers, getMultiUsers, getUser } from '../controllers/userControllers.mjs';
import { userSchemaValidator } from '../middlewears/schemaValidators/userSchemaValidator.mjs';

export const usersRoutes = new Router({ mergeParams: true });

usersRoutes.get('', userSchemaValidator.query, getMultiUsers);

usersRoutes.get('/:id', userSchemaValidator.params, getUser);

usersRoutes.put('/:id', userSchemaValidator.params, editUsers);

usersRoutes.delete('/:id', userSchemaValidator.params, deleteUsers);
