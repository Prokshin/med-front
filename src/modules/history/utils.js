import { servicesList } from '../../enum/services';

export const getService = (service) => servicesList.find((el) => el.id === service);
