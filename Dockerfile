FROM 190594267513.dkr.ecr.ap-northeast-2.amazonaws.com/node:latest

WORKDIR /home/app

COPY . .

RUN npm install
CMD node index.js
