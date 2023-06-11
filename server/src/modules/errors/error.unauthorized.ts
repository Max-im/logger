import { UNAUTHORIZED_ERROR } from '../../util/constants';

export class ErrorUnauthorized extends Error {
  statusCode = 401;

  constructor(msg?: string) {
    msg = msg || UNAUTHORIZED_ERROR;
    super(msg);
  }
}
