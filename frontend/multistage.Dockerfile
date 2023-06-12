FROM node:14-alpine as node

WORKDIR /app

COPY package*.json ./

# RUN npm install

COPY . .

# RUN npm run build


FROM nginx:1.21-alpine

WORKDIR /usr/share/nginx/html

COPY --from=node /app/build .

EXPOSE 80

ENTRYPOINT [ "nginx","-g","daemon off;" ]