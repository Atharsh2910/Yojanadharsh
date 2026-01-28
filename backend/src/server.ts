import express, { Request, Response } from 'express';
import cors from 'cors';
import supabase from './lib/supabaseClient.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('Yojanadharsh Backend is running 🚀');
});

app.get('/schemes', async (_req: Request, res: Response) => {
  const { data, error } = await supabase.from('schemes').select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
