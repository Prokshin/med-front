export const servicesList = [
  {
    id: 'ecg',
    name: 'Исследование ЭКГ',
    description: 'С помощью этого сервиса вы можете получить предположение о наличии и типе аритмии у пациента.',
    url: '/ecg',
  },
  {
    id: 'eeg',
    name: 'Исследование ЭЭГ',
    description: 'С помощью этого сервиса можно получить информацию о возможном приступе эпилепсии у пацинта по ЭЭГ.',
    url: '/eeg',
  },
];

export const statusDictionary = {
  success: 'Успешно',
  error: 'Ошибка',
};

export const statusIconDictionary = {
  success: 'check',
  error: 'close',
};
