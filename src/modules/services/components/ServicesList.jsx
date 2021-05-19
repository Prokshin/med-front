import React from 'react';
import ServicesItem from './ServicesItem';

const MOCK_SERVICES = [
  {
    id: 'ecg',
    name: 'Исследование ЭКГ',
    description: 'описние в общем',
    url: '/ecg',
  },
  {
    id: 'ecg',
    name: 'Исследование ЭКГ',
    description: 'описние в общем',
    url: '/ecg',
  },
];

const ServicesList = () => {
  const services = MOCK_SERVICES;
  return (
    <div className="row">
      {
        services.map((service) => (
          <div className="col-md-6 mb-4">
            <ServicesItem
              id={service.id}
              name={service.name}
              description={service.description}
              url={service.url}
            />
          </div>
        ))
      }
    </div>
  );
};

export default React.memo(ServicesList);
