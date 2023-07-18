"use strict";

// Read the .env file.
import * as dotenv from "dotenv";
dotenv.config();

// Require the framework
import Fastify from "fastify";
import cors from "@fastify/cors";

// Instantiate Fastify with some config
const app = Fastify({
  logger: true,
});

// Register your application as a normal plugin.
app.register(import("../src/app.js"));
app.register(cors, {
  origin: true,
});

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🚀 Server listening on port http://localhost:3333");
  });
