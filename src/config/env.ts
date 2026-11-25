import "dotenv/config";

// Validate configuration before making requests.
function required(name: string): string {
  const value = process.env[name];
  if (!value?.trim()) throw new Error(`Missing ${name}`);
  return value;
}
export const env = Object.freeze({
  anthropicApiKey: required("ANTHROPIC_API_KEY"),
  claudeModel: required("CLAUDE_MODEL"),
});
    