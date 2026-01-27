import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Matching algorithm for grassroots enterprises [cite: 106]
app.post('/api/match-schemes', async (req, res) => {
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