# Use the official Node.js runtime as the base image
FROM node:20-buster-slim as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG BASE_URL
RUN sed -i "s|http://localhost:5000|${BASE_URL}|g" src/services/httpService.js && \
    npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]