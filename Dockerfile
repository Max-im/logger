FROM node:alpine

WORKDIR /usr/app

COPY ./server/package.json .
COPY ./server/package-lock.json .
COPY ./server/prisma .

RUN npm install\
    && npm install typescript -g

COPY ./server .

RUN touch ./.env

RUN tsc
CMD ["node", "./dist/app.js"]