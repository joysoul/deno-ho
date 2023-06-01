import { Hono } from "https://deno.land/x/hono/mod.ts";
import { serve } from "https://deno.land/std/http/server.ts";

const app = new Hono();

app.get("/", async (c) => {
  const client = Deno.createHttpClient({
    proxy: { url: "http://123.60.143.98:7890" },
  });
  //const response = await fetch("https://myserver.com", );

  let ssx = "https://api-ipv4.ip.sb/ip ";
  let ss = await fetch("https://api-ipv4.ip.sb/ip ");
  // let s = await ss.json();
  let xx = await ss.text();
  console.log("xdo:" + ssx);
  console.log(xx);
  return fetch(ssx, { client });
  //c.text(xx);
});

serve(app.fetch);
