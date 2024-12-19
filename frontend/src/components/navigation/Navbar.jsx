import { BellIcon, CogIcon } from '@heroicons/react/outline';

// eslint-disable-next-line react/prop-types
const Navbar = ({ userName }) => {
  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center">
      {/* Left side: Greeting and User Name */}
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-semibold">Hii, {userName}</h1>
      </div>

      {/* Right side: Icons for Notifications and Settings */}
      <div className="flex space-x-6">
        <button className="text-white hover:text-gray-300">
          <BellIcon className="h-6 w-6" />
        </button>
        <button className="text-white hover:text-gray-300">
          <CogIcon className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
