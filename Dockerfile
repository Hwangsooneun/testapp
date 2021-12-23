FROM node:14-alpine

WORKDIR /home/app
COPY . .

RUN npm install
CMD node index.js
