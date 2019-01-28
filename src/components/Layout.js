import React from 'react';
import { node } from 'prop-types';

import Sidebar from './Sidebar/Sidebar';

const Layout = ({ children }) => (
  <>
    <Sidebar />
    <main role="main" className="main">
      {children}
    </main>
  </>
);

Layout.propTypes = {
  children: node.isRequired
};

export default Layout;
