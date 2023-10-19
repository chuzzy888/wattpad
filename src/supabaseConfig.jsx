import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ukxljdptjnkviynrxvsd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVreGxqZHB0am5rdml5bnJ4dnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczMTM5MzQsImV4cCI6MjAxMjg4OTkzNH0.IFDZiBeF04fthQ1jXWbLHQbJl1rsDGZdKvHMrqWvVLI';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
