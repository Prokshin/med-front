import { httpService } from '../../../data/DataProviderBase';

export const sendEcgRequest = async (data) => {
  const res = await httpService.post('/ecg', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};
