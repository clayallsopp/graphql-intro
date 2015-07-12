import express from 'express';

let app  = express();
let PORT = 3000;

app.post('/graphql', (req, res) => {
  res.send('Hello!');
});

let server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});