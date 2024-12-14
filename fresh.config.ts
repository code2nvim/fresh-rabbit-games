import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

export default defineConfig({
  plugins: [tailwind()],
  port: 3000,
  cert: Deno.readTextFileSync("./.env.local/public_certificate.pem"),
  key: Deno.readTextFileSync("./.env.local/private_key.pem"),
});
