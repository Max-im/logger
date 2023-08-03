FROM node:alpine
WORKDIR /usr/app
COPY package.json .
RUN npm install\
    && npm install typescript -g
RUN tsc
COPY . .
RUN tsc
CMD ["node", "./dist/server.js"]