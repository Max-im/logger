import { GET_LOGS_URL } from '../../constants';
import { ILog } from '../../logs';
import api from '../../services/http';

// eslint-disable-next-line
type cb = (err: undefined | string, value: undefined | ILog) => void;

export const getLogDataAction = async (projectId: string, logId: string, cb: cb) => {
    try {
        const response = await api.get<{ log: ILog }>(`${GET_LOGS_URL}/${projectId}/log/${logId}`);
        cb(undefined, response.data.log);
    } catch (err) {
        cb(err.message, undefined);
    }
};
