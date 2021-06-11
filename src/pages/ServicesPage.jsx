import React from 'react';
import ServicesList from '../modules/services/components/ServicesList';

const ServicesPage = () => (
  <div>
    <h2 className="mt-3 mb-5">Сервисы</h2>
    <ServicesList />
  </div>
);

export default React.memo(ServicesPage);
