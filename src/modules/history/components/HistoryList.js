import React, { useCallback } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { statusIconDictionary } from '../../../enum/services';
import { getService } from '../utils';

const HistoryList = ({ history }) => {
  const getDate = useCallback((date) => format(new Date(date), 'dd/mm/yyyy hh:mm'), []);
  const getServiceLink = useCallback((type) => {
    const service = getService(type);
    return (
      <Link to={service.url}>{service.name}</Link>
    );
  }, []);
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Название</th>
            <th scope="col">Результат</th>
            <th scope="col">Тип</th>
            <th scope="col">Дата</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {history && history.map((el) => (
            <tr key={el.id}>
              <td>{el.title}</td>
              <td>{el.text}</td>
              <td>{getServiceLink(el.type)}</td>
              <td>{getDate(el.createdDate)}</td>
              <td className={`text-${el.status}`}>
                <i className={`bi-${statusIconDictionary[el.status]} `} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(HistoryList);
