import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

const CERT = Deno.env.get("CERT");
const KEY = Deno.env.get("KEY");

export default defineConfig({
  plugins: [tailwind()],
  server: {
    cert: CERT && Deno.readTextFileSync(CERT),
    key: KEY && Deno.readTextFileSync(KEY),
  },
});
