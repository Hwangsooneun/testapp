FROM 190594267513.dkr.ecr.ap-northeast-2.amazonaws.com/node:latest AS builder

WORKDIR /app
COPY . .

RUN npm install

FROM 190594267513.dkr.ecr.ap-northeast-2.amazonaws.com/node:latest
WORKDIR /usr/src/app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/index.js ./
COPY --from=builder /app/upload.js ./
COPY --from=builder /app/.env ./

EXPOSE 3050
CMD node index.js