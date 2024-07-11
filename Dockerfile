# Install dependencies only when needed
# Stage 0
FROM oven/bun:1.0.36-alpine AS deps
WORKDIR /app

COPY package.json ./
COPY prisma ./prisma
RUN bun install
#############################################


FROM oven/bun:1.0.36-alpine AS builder
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/bun.lockb ./bun.lockb

ARG SECRET
ARG DATABASE_URL
ARG NEXT_PUBLIC_URL
#####################
ENV SECRET=$SECRET
ENV DATABASE_URL=$DATABASE_URL
ENV NEXT_PUBLIC_URL=$NEXT_PUBLIC_URL


RUN bun run build
#############################################


FROM oven/bun:1.0.36-alpine AS prod

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/.vinxi ./.vinxi
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

ENV BUN=true

EXPOSE 3000

CMD ["bun", "start"]