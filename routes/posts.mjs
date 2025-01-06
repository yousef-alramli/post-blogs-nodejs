import { Router } from 'express';
import { createPost, deletePosts, editPosts, getMultiPosts, getPost } from '../controllers/postControllers.mjs';
import { postSchemaValidator } from '../middlewears/schemaValidators/postSchemaValidator.mjs';

export const postsRoutes = new Router({ mergeParams: true });

postsRoutes.get('', postSchemaValidator.query, getMultiPosts);

postsRoutes.get('/:id', postSchemaValidator.params, getPost);

postsRoutes.put('/:id', postSchemaValidator.params, editPosts);

postsRoutes.post('', postSchemaValidator.body, createPost);

postsRoutes.delete('/:id', postSchemaValidator.params, deletePosts);
