import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;//'https://rkihgxoyygkqodjbrvxw.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;//process.env.SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)