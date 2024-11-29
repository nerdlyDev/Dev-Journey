import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// QueryClient is the core class that manages query caching, retrying, and synchronization
// It stores and updates query results and handles background updates
const queryClient = new QueryClient(); // instance of QueryClient Class

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* QueryClientProvider is a Context Provider that makes the queryClient instance
        available to all child components that need to interact with queries.
        Any components using useQuery or useMutation hooks must be wrapped in QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
