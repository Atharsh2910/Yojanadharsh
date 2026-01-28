const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const supabase = require('./lib/supabaseClient');
import { Request, Response } from 'express';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Matching algorithm for grassroots enterprises [cite: 106]
app.post('/api/match-schemes', async (req: Request, res: Response) => {
  const { businessType, sector, state } = req.body;

  const { data, error } = await supabase
    .from('schemes')
    .select('*')
    .eq('sector', sector)
    .contains('eligibility_tags', [businessType]);

  if (error) return res.status(500).json({ error: error.message });
  res.json({ schemes: data, count: data?.length });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Yojanadharsh Backend Active on Port ${PORT}`));