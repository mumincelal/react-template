import { createEnv } from "@t3-oss/env-core";
import z from "zod";

const client = z.object({
  VITE_SUPABASE_URL: z.string(),
  VITE_SUPABASE_ANON_KEY: z.string()
});

export const env = createEnv({
  clientPrefix: "VITE_",
  client: client.shape,
  runtimeEnv: {
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY
  },
  skipValidation: !!import.meta.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true
});
