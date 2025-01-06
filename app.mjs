import express from 'express';
import { usersRoutes } from './routes/users.mjs';
import { validateToken } from './middlewears/validateToken.mjs';
import { authRoutes } from './routes/auth.mjs';
import { postsRoutes } from './routes/posts.mjs';
import serverless from "serverless-http";
import cors from 'cors';

const app = express();
const PORT = 8000;
const corsOptions = {
  origin: '*',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use('/', express.json());

app.use('/auth',  authRoutes );
app.use('/users', validateToken, usersRoutes );
app.use('/posts', validateToken, postsRoutes );

app.listen(PORT, (error) => {
  if (!error) {
    console.log("App is listening on port: " + PORT)
  } else {
    console.log("Error occurred, server can't start", error);
  }
});

export default serverless(app);
