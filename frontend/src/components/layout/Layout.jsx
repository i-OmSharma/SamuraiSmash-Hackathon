/* eslint-disable react/prop-types */
import { useLocation } from 'react-router-dom';
import Sidebar from '../navigation/Sidebar';
import Navbar from '../navigation/Navbar';

const Layout = ({ children }) => {
  const userName = "John Doe"; // For now, hardcoding the username
  const location = useLocation(); // Get the current route

  // Define routes where Sidebar and Navbar should NOT appear
  const hiddenRoutes = ['/signin', '/signup'];
  const hideLayout = hiddenRoutes.includes(location.pathname);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Render Sidebar and Navbar only if not on hidden routes */}
      {!hideLayout && <Sidebar />}
      <div className="flex-1 flex flex-col">
        {!hideLayout && <Navbar userName={userName} />}
        <div className="flex-1 p-8">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
