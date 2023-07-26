import api from '../../services/http';
import { GET_DONATE_URL } from '../../constants';
import { apiErrorHandler } from '../../shared/errorHandler';
import { IDonate } from '../model/donate.model';

export const onGetDonateParamsAction = async (amount: string) => {
    try {
        const response = await api.get<IDonate>(`${GET_DONATE_URL}/${amount}`);
        return response.data;
    } catch (err) {
        throw apiErrorHandler(err);
    }
};
