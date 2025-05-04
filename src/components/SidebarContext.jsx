import { createContext } from 'react';

const SidebarContext = createContext({
  sidebarOpen: true,
  setSidebarOpen: () => {},
});

export default SidebarContext;