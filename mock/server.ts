import {Hono} from "hono";
import {serve} from "@hono/node-server";
import {cors} from "hono/cors";
import * as aktiveVarsler from './data/aktive.json';

const api = new Hono();

api.use("/*", cors({
    origin: "http://localhost:4321",
    credentials: true,
}));

api.get('/tms-varsel-api/aktive', (c) => c.json(aktiveVarsler));

serve(api);