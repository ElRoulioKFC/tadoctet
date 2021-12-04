FROM node:alpine
EXPOSE 3000
WORKDIR /mnt
RUN npm install -g nodemon
