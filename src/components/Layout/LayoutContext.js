import { createContext } from 'react';

const LayoutContext = createContext({ sidebarActive: false, toggleSidebar: () => {} });

export default LayoutContext;
