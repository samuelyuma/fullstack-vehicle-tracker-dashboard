FROM oven/bun:1-alpine
WORKDIR /app
COPY . .
RUN bun install

ENV NODE_ENV=production
RUN bun run prisma:generate

CMD ["bun", "run", "dev"]

EXPOSE 8080