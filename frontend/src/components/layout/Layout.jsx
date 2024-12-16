/* eslint-disable react/prop-types */
import Sidebar from '../navigation/Sidebar';
import Navbar from '../navigation/Navbar'; // Import Navbar component

const Layout = ({ children }) => {
  const userName = "John Doe"; // For now, hardcoding the username

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Navbar is already here */}
        <Navbar userName={userName} />
        <div className="flex-1 p-8">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
