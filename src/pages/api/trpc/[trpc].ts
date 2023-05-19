import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "zaki/env.mjs";
import { createTRPCContext } from "zaki/server/api/trpc";
import { appRouter } from "zaki/server/api/root";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
          );
        }
      : undefined,
});
