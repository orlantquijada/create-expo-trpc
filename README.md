## About

[Turborepo](https://turborepo.org/), [tRPC](https://trpc.io/), [React Native with Expo](https://reactnative.dev/), [Fastify](https://www.fastify.io/) template

```
.github
  └─ workflows
        └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ expo
  |   ├─ Expo SDK 47
  |   ├─ Native packages using Expo dev client
  |   ├─ React Native using React 18
  |   ├─ Tailwind using Nativewind
  |   └─ Typesafe API calls using tRPC
  └─ server
      └─ tRPC fastify server
packages
 ├─ api
 |   └─ tRPC v10 router definition
 └─ db
     └─ typesafe db-calls using Prisma
```

## Quick Start

To get it running, follow the steps below:

### Setup dependencies

```diff
# Install dependencies
pnpm i

# Configure environment variables.
# There is an `.env.example` in the root directory you can use for reference
cp .env.example .env

# Push the Prisma schema to your database
pnpm db:push

# Run the app
pnpm dev
```
