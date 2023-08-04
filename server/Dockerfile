FROM node:14

WORKDIR /usr/app

COPY ./server/package*.json ./

RUN npm install

COPY ./server ./

EXPOSE 5000

CMD ["npm", "start"]
