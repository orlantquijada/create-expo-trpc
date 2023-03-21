import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server"
import { AppRouter } from "./src/router"

export { appRouter } from "./src/router"

export { createContext } from "./src/context"
export type { Context } from "./src/context"

export type RouterInputs = inferRouterInputs<AppRouter>
export type RouterOutputs = inferRouterOutputs<AppRouter>

export type { AppRouter }
