import fastify from "fastify";
import { FastifyRequest, FastifyReply } from "fastify";

async function routes(fastify: any, options: any) {
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: "world" };
  });
}

export default routes;
