import { httpService } from '../../../data/DataProviderBase';

export const getHistory = async (params = {}) => {
  console.log(params);
  const res = await httpService.get('/history/user', { params });
  return res.data;
};
