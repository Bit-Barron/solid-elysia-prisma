import { createSignal, Component, JSX } from "solid-js";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";

interface QueryProviderProps {
  children: JSX.Element;
}

export const QueryProvider: Component<QueryProviderProps> = (props) => {
  const [queryClient] = createSignal(
    new QueryClient({
      defaultOptions: { queries: { refetchOnWindowFocus: false } },
    })
  );

  return (
    <QueryClientProvider client={queryClient()}>
      {props.children}
    </QueryClientProvider>
  );
};
