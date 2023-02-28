import { createClient } from '@supabase/supabase-js';

const supabaseKey = import.meta.env.VITE_CARLLINUSHEDLUND_SUPABASE_KEY;
const supabaseUrl = import.meta.env.VITE_CARLLINUSHEDLUND_SUPABASE_URL;
export const supabase = createClient(supabaseUrl, supabaseKey);
