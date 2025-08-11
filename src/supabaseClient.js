import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wsztbjyikjyyibvbgamk.supabase.co'; // Substitua pela sua URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzenRianlpa2p5eWlidmJnYW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5NTA0MzUsImV4cCI6MjA3MDUyNjQzNX0.IV722lErsOyKOfBilntqXUUjN1YNyCYKDkALxEqRP1o'; // Substitua pela sua chave

export const supabase = createClient(supabaseUrl, supabaseKey);