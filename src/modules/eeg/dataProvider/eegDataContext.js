import { httpService } from '../../../data/DataProviderBase';

export const sendEegRequest = async (data) => {
  const res = await httpService.post('/eeg', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};
