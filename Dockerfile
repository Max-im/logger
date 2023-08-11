# === Stage 1: Build the client ===
FROM node:14 AS client-builder

WORKDIR /usr/app/client

COPY ./client/package*.json ./

RUN npm install

COPY ./client ./

RUN npm run build

# === Stage 2: Build the server and create the final Docker image ===
FROM node:14 AS server-builder

WORKDIR /usr/app

COPY ./server/package*.json ./

RUN npm install

COPY ./server .

RUN npx prisma generate

RUN npm run build

# === Stage 3: Create the final Docker image ===
FROM node:14

WORKDIR /usr/app

# Copy only the compiled 'dist' folder from server and 'build' folder from client
COPY --from=server-builder /usr/app/dist ./dist
COPY --from=client-builder /usr/app/client/build ./dist/build

COPY ./server/prisma ./prisma

COPY ./server/package*.json ./

RUN npm install --production

RUN npx prisma generate

EXPOSE 80

# Start the server
CMD ["npm", "start"]
