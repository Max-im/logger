FROM node:alpine
WORKDIR /usr/app
COPY ./server/package.json .
RUN npm install\
    && npm install typescript -g
COPY ./server .
RUN tsc
CMD ["node", "./dist/app.js"]