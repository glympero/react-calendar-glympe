import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
      <h1>This is 404 page</h1>
      <Link to={{ pathname: '/' }}>Home</Link>
    </div>

  );

export default NotFoundPage;