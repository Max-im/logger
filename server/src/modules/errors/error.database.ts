import { ErrorCustom } from "./error.custom";

export class ErrorDatabase extends ErrorCustom {
  statusCode: number;

  constructor(err: Error) {
    const msg = 'Database Error';
    const statusCode = 500;
    super(msg, statusCode, err);
    this.statusCode = 500;
  }
}
