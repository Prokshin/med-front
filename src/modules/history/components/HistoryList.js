import React from 'react';
import { statusDictionary, statusIconDictionary } from '../../../enum/services';

const HistoryList = ({ history }) => (
  <div className="table-responsive">
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Название</th>
          <th scope="col">Результат</th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody>
        {history.map((el) => (
          <tr>
            <td>{el.title}</td>
            <td>{el.text}</td>
            <td className={`text-${el.status}`}>
              <i className={`bi-${statusIconDictionary[el.status]} `} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default React.memo(HistoryList);
