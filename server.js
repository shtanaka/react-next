const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/show/:id', (req, res) => {
      const actualPage = '/showDetail';
      const queryParams = { id: req.params.id }; 
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) {
        throw err;
      }
      console.log('> Server ready on http://localhost:3000/')
    });
  })
  .catch((exception) => {
    console.error(exception.stack);
    process.exit(1);
  });
