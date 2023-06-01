import {
  app,
  contentType,
  get,
  post,
  redirect,
} from "https://denopkg.com/syumai/dinatra/mod.ts";

const greeting = "<h1>Hello 222 From Deno on Fly!</h1>";

app(
  get("/", () => greeting),
  get("/:id", ({ params }) => greeting + `</br>and hello to ${params.id}`),
);
