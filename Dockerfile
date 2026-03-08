FROM node:20-alpine AS build-stage
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS production-stage
WORKDIR /app

COPY --from=build-stage /app/.next/standalone ./
COPY --from=build-stage /app/.next/static ./.next/static
COPY --from=build-stage /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
