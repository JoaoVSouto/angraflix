const path = require('path')

const jsonServer = require('json-server');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3333;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => console.log(`JSON Server is running on ${PORT}...`));
