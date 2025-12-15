import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { env } from "@/common/env";

export function createClient() {
  return createSupabaseClient(
    env.VITE_SUPABASE_URL,
    env.VITE_SUPABASE_ANON_KEY
  );
}
