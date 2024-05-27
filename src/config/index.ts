import express, { Request, Response } from 'express';
const app = express();

const produtos: any[] = [];

app.get('/produtos', (req: Request, res: Response) => {
  res.json(produtos);
});

app.post('/produtos', (req: Request, res: Response) => {
  produtos.push(req.body);
  res.status(201).end('ok');
});

export default app;