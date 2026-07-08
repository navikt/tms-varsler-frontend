import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import * as varsler from "./data/varsler.json";

const api = new Hono();

api.use(
  "/*",
  cors({
    origin: "http://localhost:4321",
    credentials: true,
  }),
);

api.get("/tms-varsel-api/alle", async (c) => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return c.json(varsler);
});

api.post("/tms-varsel-api/beskjed/inaktiver", async (_c) => {});

serve(api);
