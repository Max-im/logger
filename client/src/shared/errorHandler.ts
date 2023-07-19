import { AxiosError } from 'axios';
import { DEFAULT_ERROR_TEXT } from '../constants';

export const errorHandler = (err: Error) => {
    console.log(err);
};

export const apiErrorHandler = (err: AxiosError) => {
    if (!err) return DEFAULT_ERROR_TEXT;

    let { message } = err;

    if ((err.response && err.response.status === 500) || !message) {
        message = DEFAULT_ERROR_TEXT;
    }

    return message;
};
