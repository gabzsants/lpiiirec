import http from 'http';
import app from './config';

const server = http.createServer(app);

server.listen(38001, () => {
  console.log('Servidor esta rodando na porta 38001');
});