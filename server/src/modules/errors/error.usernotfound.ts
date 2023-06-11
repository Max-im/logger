import { ErrorNotFound } from './error.notfound';
import { USER_NOT_FOUND } from '../../util/constants';

export class ErrorUserNotFound extends ErrorNotFound {
  constructor() {
    super(USER_NOT_FOUND);
  }
}
