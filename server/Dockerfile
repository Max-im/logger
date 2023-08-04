# === Stage 1: Build TypeScript code ===
FROM node:14 AS builder

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build:prod

# === Stage 2: Create the final Docker image ===
FROM node:14

WORKDIR /usr/app

# Copy only the compiled 'dist' folder and package.json
COPY --from=builder /usr/app/package.json /app/package-lock.json ./
COPY --from=builder /usr/app/dist ./dist

RUN npm install --production

EXPOSE 5000

CMD ["npm", "start"]
