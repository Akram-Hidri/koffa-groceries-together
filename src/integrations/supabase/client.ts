// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xjdsbdgcqvozbvxupaby.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqZHNiZGdjcXZvemJ2eHVwYWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NzEzMjcsImV4cCI6MjA2MTM0NzMyN30.H4DAba_cL66oOXuT14ms5UgaCjgrs8fHHfBro66266A";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);