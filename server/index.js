const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '..', '.env.local'),
});

const jsonServer = require('json-server');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3333;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === 'GET') {
    return next();
  }

  const { token } = req.body;

  if (token === process.env.SECRET_PASS) {
    delete req.body.token;

    return next();
  }

  return res.status(401).json({ error: 'Token inválido.' });
});

server.use(router);

server.listen(PORT, () => console.log(`JSON Server is running on ${PORT}...`));
