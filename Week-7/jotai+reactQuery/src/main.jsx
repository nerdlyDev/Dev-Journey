import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "jotai";

const queryClient = new QueryClient();

try {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <App />
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </StrictMode>,
  );
} catch (error) {
  console.error("Error rendering App:", error);
}
