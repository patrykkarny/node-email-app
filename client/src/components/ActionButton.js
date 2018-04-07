import React from 'react';

import { Link } from 'react-router-dom';

export const ActionButton = () => (
  <div className="fixed-action-btn">
    <Link className="btn-floating btn-large red" to="/surveys/new">
      <i className="material-icons">add</i>
    </Link>
  </div>
);
