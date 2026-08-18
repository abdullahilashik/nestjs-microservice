FROM node:20-alpine AS BUILD
WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm run build tasks
RUN npm run build api-gateway

COPY . .

# STEP TWO PRODUCTION BUILD

FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY --from=BUILD ./dist/tasks ./dist/tasks
COPY --from=BUILD ./dist/api-gateway ./dist/api-gateway