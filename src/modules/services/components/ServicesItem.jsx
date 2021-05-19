import React from 'react';
import { Link } from 'react-router-dom';

const ServicesItem = ({
  id, name, description, url,
}) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">
        {description}
      </p>
      <Link to={url} className="card-link stretched-link">Перейти</Link>
    </div>
  </div>
);

export default React.memo(ServicesItem);
