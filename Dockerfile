FROM 190594267513.dkr.ecr.ap-northeast-2.amazonaws.com/node:latest
WORKDIR /usr/src/app
COPY . .

RUN npm install
CMD node index.js