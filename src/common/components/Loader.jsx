import React from 'react';
import Loader from 'react-loader-spinner';
import './Loader.css';

const LoaderWrap = ({ loading, children }) => (
  <div className="position-relative">
    {children}
    {
      loading
      && (
        <div className="loader">
          <div className="position-absolute top-50 start-50 translate-middle">
            <Loader
              type="Puff"
              height={50}
              width={50}
            />
          </div>
        </div>
      )
    }

  </div>
);

export default React.memo(LoaderWrap);
