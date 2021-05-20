import { httpService } from '../../../data/DataProviderBase';

export const getHistory = async () => {
  const res = await httpService.get('/history/user');
  return res.data;
};
