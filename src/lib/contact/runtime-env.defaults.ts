/**
 * Empty fallback used when `runtime-env.generated.ts` is absent.
 * Amplify fills the gitignored generated module at build time.
 * Do not import this from Client Components.
 */
export const bakedContactRuntimeEnv = {
  TURNSTILE_SECRET_KEY: "",
  CONTACT_RATE_LIMIT_TABLE: "",
};
