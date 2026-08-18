FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci
RUN npm run build tasks
RUN npm run build api-gateway

COPY . .

# STEP TWO PRODUCTION BUILD

FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=build /app/dist/tasks ./dist/tasks
COPY --from=build /app/dist/api-gateway ./dist/api-gateway