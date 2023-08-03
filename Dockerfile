FROM node:12-alpine as base

WORKDIR /usr/app

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV
EXPOSE 5000

# App and dev dependencies
COPY ["package.json", "package-lock.json", "prisma", "./"]

RUN npm install

# App source
COPY . .

# Build step for production
FROM base

RUN npm install typescript

CMD ["node", "./dist/app.js"]