import React from 'react';
import ServicesItem from './ServicesItem';
import { servicesList } from '../../../enum/services';

const ServicesList = () => (
  <div className="row">
    {
        servicesList?.map((service) => (
          <div key={service.id} className="col-md-6 mb-4">
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

export default React.memo(ServicesList);
