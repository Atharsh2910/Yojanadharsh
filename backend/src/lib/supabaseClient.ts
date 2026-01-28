import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('ENV VALUES:', {
    SUPABASE_URL: supabaseUrl,
    SUPABASE_SERVICE_ROLE_KEY: supabaseKey ? 'present' : 'missing'
  });

  throw new Error('Supabase environment variables not loaded');
}

const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabaseClient;
