import Anthropic from "@anthropic-ai/sdk";
import { env } from "../config/env.js";
// Reuse a single configured client.
export const claudeClient = new Anthropic({
  apiKey: env.anthropicApiKey,
  timeout: 60_000,
  maxRetries: 2,
});
