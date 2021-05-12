import { httpService } from '../data/DataProviderBase';

export const login = async (data) => httpService
  .post('/auth/login', JSON.stringify(data)).then((res) => res.data);
