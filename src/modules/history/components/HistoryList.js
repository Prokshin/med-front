import React from 'react';

const HistoryList = ({ history }) => (
  <div>
    {history.map((el) => <div>{el.title}</div>)}
  </div>
);

export default React.memo(HistoryList);
