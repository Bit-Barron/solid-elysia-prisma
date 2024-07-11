import { QueryClient } from "@tanstack/solid-query";
import { cache } from "@solidjs/router";

const getQueryClient = cache(() => new QueryClient(), "query-client");

export default getQueryClient;
