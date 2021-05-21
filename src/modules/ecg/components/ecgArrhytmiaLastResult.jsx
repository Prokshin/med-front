import React from 'react';
import { useSelector } from 'react-redux';
import { getEcgLastResult, getEcgLoading } from '../selectors/ecgSelectors';
import { statusIconDictionary } from '../../../enum/services';
import Loader from '../../../common/components/Loader';

const EcgArrhythmiaLastResult = () => {
  const result = useSelector(getEcgLastResult);
  const loading = useSelector(getEcgLoading);
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <Loader loading={loading}>
          <div className="card w100">
            {
              result
              && (
              <div className="card-body">
                <h5 className="card-title">
                  {result?.title}
                  <span className={`text-${result?.status}`}>
                    <i className={`bi-${statusIconDictionary[result?.status]} `} />
                  </span>
                </h5>
                <p className="card-text">
                  {result?.text}
                </p>
              </div>
              )
            }
          </div>
        </Loader>
      </div>
    </>
  );
};

export default React.memo(EcgArrhythmiaLastResult);
