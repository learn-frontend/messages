import React from 'react';
import { NavLink } from 'react-router-dom';

import { MESSAGES } from './constants';
import Message from './Message';

const InboxPage = () => {
  return (
    <div className="row">
      <div className="preview col-6 col-md-4 col-lg-3">
        <ul className="preview-list">
          {MESSAGES.map((item) => (
            <li key={item.id}>
              <NavLink to={`/inbox/${item.id}`} className="preview-list-item" activeClassName="active">
                <h5>{item.title}</h5>
                <div>{item.message.slice(0, 100)}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6 col-md-8 col-lg-9">
        <Message />
      </div>
    </div>
  )
};

export default InboxPage;