import { Hono } from "https://deno.land/x/hono/mod.ts";
import { serve } from "https://deno.land/std/http/server.ts";

const app = new Hono();

app.get("/", (c) => c.text("aaa Hello Deno!"));

serve(app.fetch);
