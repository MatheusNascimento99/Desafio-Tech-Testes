import type { Request, Response } from 'express';
import * as express from 'express';
import alunoFactory from './aluno.factory';
import { Soma } from '../../libs/soma';


const router = express.Router();

router.get('/', async (_, res) => {
  const data = await alunoFactory.getAll(); 
  return res.status(200).json({ data });
});

router.post('/', async (req:Request, res:Response) => {
  const data = await alunoFactory.store(req.body);
  return res.status(200).json({ data });
});

router.post('/soma', async (req, res) => {
  const response = Soma(req.body.a, req.body.b)
  return res.status(200).json(response)
})




export default router;
