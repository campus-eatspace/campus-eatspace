import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://niaitqnxlmvianbwcwdj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pYWl0cW54bG12aWFuYndjd2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyODM0NjgsImV4cCI6MjA3Nzg1OTQ2OH0.DCwDEBXZqKGXFlNt6SWSq9FsQVptpdGWQn73vyFkHE4'

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey)