import { httpService } from '../../../data/DataProviderBase';

export const getCurrentUser = async () => {
  const res = await httpService.get('/user/current');
  return res.data;
};
