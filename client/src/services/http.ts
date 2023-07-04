import axios from 'axios';

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const setAuthHeader = (token: string | null) => {
    const value = token ? `Bearer ${token}` : null;
    api.defaults.headers.common.Authorization = value;
};

export default api;
