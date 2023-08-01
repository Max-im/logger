"use strict";
// import request from 'supertest';
// import { app } from '../app';
// declare global {
//     function signin(email?: string): Promise<any>;
// }
beforeEach(() => {
    jest.clearAllMocks();
});
jest.setTimeout(1000 * 100);
// global.signin = async (email?: string): Promise<any> => {
// email = email || testUserEmail;
// const encryptedEmail = TokenService.encryptString(email);
// const response = await request(app).post('/auth').send({ email: encryptedEmail });
// return response.body;
// };
