# FROM node:14-alpine

# WORKDIR /app

# COPY package*.json ./

# # RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["npm", "start"]


FROM nginx:1.21-alpine

WORKDIR /usr/share/nginx/html

COPY ./build .

EXPOSE 80

ENTRYPOINT [ "nginx","-g","daemon off;" ]