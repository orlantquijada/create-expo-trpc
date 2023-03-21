import fastify from "fastify"
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify"
import { createContext, appRouter } from "@acme/api"
import { getHostIP } from "./utils"

export function createServer() {
  const port = Number(process.env.PORT) || 3000
  const server = fastify({
    maxParamLength: 5000,
  })

  server.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: { router: appRouter, createContext },
  })

  server.get("/ping", async () => {
    return "pong"
  })

  const stop = () => server.close()
  const start = async () => {
    const host =
      process.env.NODE_ENV === "development" ? getHostIP() : "0.0.0.0"

    try {
      await server.listen({ port, host })
      if (process.env.NODE_ENV === "development")
        console.log(`listening on ${host}:${port}`)
    } catch (err) {
      server.log.error("err", err)
      process.exit(1)
    }
  }

  return { server, start, stop }
}
