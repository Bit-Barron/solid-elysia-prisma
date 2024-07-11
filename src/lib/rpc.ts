import { edenTreaty } from "@elysiajs/eden/treaty";

export const rpc = edenTreaty(
  typeof window === "undefined"
    ? `http://localhost:${process.env.PORT || 3000}`
    : window.location.origin
);
