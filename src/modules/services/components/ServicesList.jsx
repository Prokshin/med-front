import React from 'react';
import ServicesItem from './ServicesItem';
import { servicesList } from '../../../enum/services';

const ServicesList = () => {
  const services = servicesList;
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
