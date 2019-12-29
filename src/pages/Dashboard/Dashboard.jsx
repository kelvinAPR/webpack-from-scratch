import React from 'react';
import { Redirect } from 'react-router-dom';

import { getAuthenticatedUser } from '../../utils/token';

const DashboardLayout = () => {
  const authUser = getAuthenticatedUser();
  if (!authUser) {
    return <Redirect to="/login" />;
  }
  return <div>dashboard</div>;
};

export default DashboardLayout;
