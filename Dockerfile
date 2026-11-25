FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
