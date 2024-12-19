import { NavLink } from 'react-router-dom';
import { FaHome, FaBook, FaTrophy, FaCalendar, FaQuestionCircle } from 'react-icons/fa';
import { BookOpen } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { path: '/home', icon: <FaHome />, label: 'Home' },
    { path: '/learning', icon: <FaBook />, label: 'Learning' },
    { path: '/progress', icon: <FaTrophy />, label: 'Progress' },
    { path: '/schedule', icon: <FaCalendar />, label: 'Schedule' },
    { path: '/support', icon: <FaQuestionCircle />, label: 'Support' },
  ];

  return (
    <div
      className="w-64 shadow-lg"
      style={{
        background: 'linear-gradient(to top, #ffe4f7, #d0f0ff)', // Light pinkish with blue touch
      }}
    >
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-8 h-8 text-indigo-600" />
          <span className="text-xl font-bold text-indigo-800">SignLearn</span>
        </div>
        <br /><br />
        <nav>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${
                  isActive ? 'bg-indigo-800 text-white' : 'text-gray-800'
                } flex items-center p-3 mb-4 rounded-lg transition-all duration-300 hover:bg-indigo-600 hover:text-white`
              }
            >
              <span className="text-xl mr-4">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
