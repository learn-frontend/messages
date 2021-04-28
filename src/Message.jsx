import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { MESSAGES } from './constants';

const Message = () => {
  const params = useParams();

  const data = MESSAGES.find((item) => item.id === +params.id);

  return (
    <div className="message">
      {data ? (
        <Fragment>
          <div className="message-head">
            <p><b>От:</b> {data.from}</p>
            <p><b>Кому:</b> {data.to}</p>
            <p><b>Тема:</b> {data.title}</p>
          </div>
          <div className="message-body">
            {data.message}
          </div>
        </Fragment>
      ) : 'Выберите сообщение'}
    </div>
  );
};

export default Message;