import hydrate from "ultra/hydrate.js";
import App from "./src/app.tsx";

// Wouter
import { Router } from "wouter";

import { HelmetProvider } from "react-helmet-async";

function ClientApp() {
  return (
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  );
}

hydrate(document, <ClientApp />);
