import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let _supabase: SupabaseClient | null = null

export function getSupabase(): SupabaseClient | null {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    // Avoid throwing during build: return null so pages can handle absence gracefully
    console.warn('Supabase environment variables are not set.')
    return null
  }

  if (!_supabase) {
    _supabase = createClient(supabaseUrl, supabaseAnonKey)
  }
  return _supabase
}
