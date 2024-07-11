import { Elysia } from "elysia";
import { authRoute } from "~/server/auth";

const app = new Elysia({ prefix: "/api", aot: false }).use(authRoute);

export type App = typeof app;

export const GET = app.handle;
export const POST = app.handle;
export const PUT = app.handle;
export const DELETE = app.handle;
export const PATCH = app.handle;
