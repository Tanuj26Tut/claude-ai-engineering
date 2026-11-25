import { claudeClient } from "../src/clients/cluade.client.js";
import { env } from "../src/config/env.js";
async function main() {
  // Send instructions and user task to the model.
  const response = await claudeClient.messages.create({
    model: env.claudeModel,
    max_tokens: 1024,
    system: "You are an experienced software engineer.",
    messages: [{ role: "user", content: "Generate 5 login test scenarios." }],
  });
  // Extract text blocks and inspect metadata.
  console.log(
    response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n"),
  );
  console.log({
    id: response.id,
    model: response.model,
    stopReason: response.stop_reason,
    usage: response.usage,
  });
}
// Handle errors without printing credentials.
main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : "Unknown error");
  process.exitCode = 1;
});
