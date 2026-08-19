# STEP ONE: BUILD STAGE
FROM node:20-alpine AS build
WORKDIR /app

# Copy dependency definitions and source code
COPY package*.json ./
COPY tsconfig*.json nest-cli.json ./
RUN npm ci

COPY apps/ ./apps/
COPY libs/ ./libs/

# Build shared libraries and applications
RUN npm run build tasks
RUN npm run build api-gateway
RUN npm run build auth-service

# STEP TWO: PRODUCTION STAGE
FROM node:20-alpine AS production
WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --only=production

# Copy compiled JS bundles from build stage
COPY --from=build /app/dist ./dist

# Command overridden per service in docker-compose
CMD ["node", "dist/apps/api-gateway/main.js"]