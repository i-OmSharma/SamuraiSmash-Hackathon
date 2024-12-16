// Home.jsx
import { useAuth } from "../context/authContext.jsx";
import SubjectPieChart from '../components/charts/SubjectPieChart';
import { subjects } from '../data/subjects.js';
import { PlayIcon, BookOpenIcon, PuzzleIcon } from '@heroicons/react/outline'; 
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>You must be logged in to view this page.</p>;
  }

  const actions = [
    { 
      title: 'Watch & Learn', 
      icon: <BookOpenIcon className="h-12 w-12 text-white" />, 
      color: 'bg-teal-500',
      link: '/watch-learn'
    },
    { 
      title: 'Quiz Time', 
      icon: <PuzzleIcon className="h-12 w-12 text-white" />, 
      color: 'bg-orange-500',
      link: '/quiz-time'
    },
    { 
      title: 'Play & Learn',  
      icon: <PlayIcon className="h-12 w-12 text-white" />, 
      color: 'bg-blue-500' ,
      link: '/play-learn'
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300">
      <div className="flex w-full max-w-7xl justify-between items-start space-x-8"> 
        
        {/* Left Column: Action Boxes */}
        <div className="flex flex-col space-y-6 w-full lg:w-1/3">
        {actions.map((action, index) => (
          <Link to={action.link} key={index}> {/* Wrap each action box in a Link */}
            <div 
              className={`flex flex-col justify-center items-center p-6 rounded-lg ${action.color} shadow-xl hover:scale-105 transition-transform duration-200`} 
              style={{ width: '250px', height: '150px' }} 
            >
              {action.icon}
              <span className="mt-4 text-white text-xl font-medium">{action.title}</span>
            </div>
          </Link>
        ))}
      </div>

        {/* Right Column: SubjectPieChart */}
        <div className="w-full lg:w-2/3 flex justify-center mt-6 lg:mt-0">
          <div className="p-6 bg-white rounded-lg shadow-xl w-full max-w-[500px]">
            <SubjectPieChart data={subjects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
