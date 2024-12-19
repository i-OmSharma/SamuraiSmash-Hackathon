import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext.jsx";
import SubjectPieChart from "../components/charts/SubjectPieChart";
import { PlayIcon, BookOpenIcon, PuzzleIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useAuth();
  const [progressData, setProgressData] = useState([
    { name: "Sign Language", progress: 25, color: "#FF6384" },
    { name: "Greetings", progress: 20, color: "#36A2EB" },
    { name: "Alphabets", progress: 25, color: "#FFCE56" },
    { name: "Numbers", progress: 30, color: "#4BC0C0" },
  ]);

  useEffect(() => {
    console.log("Progress Data:", progressData);
  }, [progressData]);

  if (!user) {
    return <p>You must be logged in to view this page.</p>;
  }

  const actions = [
    {
      title: "Play & Learn",
      icon: <PlayIcon className="h-12 w-12 text-white" />,
      color: "bg-gradient-to-r from-blue-500 to-indigo-500",
      link: "/play-learn",
    },
    {
      title: "Quiz Time",
      icon: <PuzzleIcon className="h-12 w-12 text-white" />,
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      link: "/quiz-time",
    },
    {
      title: "Watch & Learn",
      icon: <BookOpenIcon className="h-12 w-12 text-white" />,
      color: "bg-gradient-to-r from-teal-500 to-green-500",
      link: "/watch-learn",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300">
      <div className="flex w-full max-w-7xl justify-between items-start space-x-8">

        {/* Left Column: Action Boxes */}
        <div className="flex flex-col space-y-6 w-full lg:w-1/3">
          {actions.map((action, index) => (
            <Link to={action.link} key={index}>
              <div
                className={`flex flex-col justify-center items-center p-6 rounded-lg ${action.color} shadow-xl hover:scale-105 transition-transform duration-200`}
                style={{ width: "250px", height: "150px" }}
              >
                {action.icon}
                <span className="mt-4 text-white text-xl font-medium">
                  {action.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Column: SubjectPieChart */}
        <div className="w-full lg:w-2/3 flex justify-center mt-6 lg:mt-0">
          <SubjectPieChart data={progressData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
