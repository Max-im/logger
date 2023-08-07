# Logger Store

> Logger Store is an app that aggregates logs from your applications and provides real-time notifications. It simplifies log management by collecting logs from various sources and promptly notifying you about crucial events, errors, and activities. With a user-friendly interface and customizable notification settings, LogNotifier ensures you stay connected to your logs and stay informed. Try Logger Store today and streamline your log monitoring process.

## Dev Using

1. make sure you have `node.js` installed on you computer.
2. clone or copy the repo `git clone https://github.com/Max-im/logger.git`
3. go to the server dir `cd server` and install server dependencies `npm install`
4. go to the client dir `cd client` and install client dependencies `npm install`
5. go to the server dir `cd server` and create `.env` file use `.env.sample` as an example
6. to the server dir `cd client` and create `.env` file use `.env.sample` as an example
7. make sure you have a valid GOOGLE API KEY for REACT_APP_GOOGLE_API client env
8. make sure you have a database up and running
9. go to the server dir `cd server` and run `npm run dev`
10. go to the client dir `cd client` and run `npm start`

## Tech

- React
- Redux-Toolkit
- Nodejs
- TypeScript
- Fastify
- Prisma
- Postgresql

## Endpoints

### Status

URL                | Access | Method | Body | Response                                   | Description
------------------ | ------ | ------ | ---- | ------------------------------------------ | -----------------------
api/v1/status/     | Free   | GET    | -    | { staus: 'up' }                            | app status
api/v1/status/info | Free   | GET    | -    | { status: string startedAt: Date node: {}} | app running info
api/v1/status/stat | Free   | GET    | -    | { projects, users }                        | projects and users info

### User

URL              | Access   | Method | Body               | Response        | Description
---------------- | -------- | ------ | ------------------ | --------------- | -----------------------
api/v1/user/     | LoggedIn | GET    | -                  | { staus: 'up' } | app status
api/v1/user/auth | Free     | POST   | GoogleAPI response | {user, token}   | projects and users info

### Plan

URL          | Access | Method | Body | Response                                                                               | Description
------------ | ------ | ------ | ---- | -------------------------------------------------------------------------------------- | -------------------------
api/v1/plan/ | Free   | GET    | -    | { id: number, name: string, projectsNum: number, cost: number, storingDays: number }[] | current plans information

### Project

### Log

### Payment

### Notification

### Donate

### Sender
