import { GET_LOGS_URL } from '../../constants';
import { ILog } from '../../logs';
import api from '../../services/http';
import { apiErrorHandler } from '../../shared/errorHandler';

// eslint-disable-next-line
type cb = (err: null | string, value: null | ILog) => void;

export const getLogDataAction = async (projectId: string, logId: string, cb: cb) => {
    try {
        const response = await api.get<{ log: ILog }>(`${GET_LOGS_URL}/${projectId}/log/${logId}`);
        cb(null, response.data.log);
    } catch (err) {
        cb(apiErrorHandler(err), null);
    }
};
