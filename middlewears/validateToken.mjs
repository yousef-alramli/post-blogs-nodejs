import jwt from 'jsonwebtoken';
import { ERROR_CODES } from '../constants/responseStatusCodes.mjs';

export const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    req.user = decoded.user;
  } catch {
    res.status(ERROR_CODES.UNAUTHORIZED).send('Unauthorized');
    return;
  }

  next();
}