import { serve } from "https://deno.land/std@0.176.0/http/server.ts";
import { type Context, createServer } from "ultra/server.ts";
import App from "./src/app.tsx";

// Wouter
import { Router } from "wouter";
import staticLocationHook from "wouter/static-location";
import { SearchParamsProvider } from "./src/wouter/index.tsx";

// React Helmet Async
import { HelmetProvider } from "react-helmet-async";
import useServerInsertedHTML from "ultra/hooks/use-server-inserted-html.js";

const server = await createServer({
  importMapPath: import.meta.resolve("./importMap.json"),
  browserEntrypoint: import.meta.resolve("./client.tsx"),
});

// deno-lint-ignore no-explicit-any
const helmetContext: Record<string, any> = {};

function ServerApp({ context }: { context: Context }) {
  useServerInsertedHTML(() => {
    const { helmet } = helmetContext;
    return (
      <>
        {helmet.title.toComponent()}
        {helmet.priority.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {helmet.script.toComponent()}
      </>
    );
  });

  const requestUrl = new URL(context.req.url);

  return (
    <HelmetProvider context={helmetContext}>
      <Router hook={staticLocationHook(requestUrl.pathname)}>
        <SearchParamsProvider value={requestUrl.searchParams}>
          <App />
        </SearchParamsProvider>
      </Router>
    </HelmetProvider>
  );
}

server.get("*", async (context) => {
  /**
   * Render the request
   */
  const result = await server.render(<ServerApp context={context} />);

  return context.body(result, 200, {
    "content-type": "text/html; charset=utf-8",
  });
});
if (import.meta.main) {
  serve(server.fetch);
}

export default server;
