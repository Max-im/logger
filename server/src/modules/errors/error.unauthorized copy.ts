import { ErrorCustom } from './error.custom';

export class ErrorForbiden extends ErrorCustom {
  statusCode = 403;

  constructor() {
    super('Forbidden');
  }
}
