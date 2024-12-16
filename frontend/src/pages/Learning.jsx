import SubjectCard from '../components/cards/SubjectCard';
import ProgressStreak from '../components/charts/ProgressStreak';  // Import the ProgressStreak component
import { subjects } from '../data/subjects';

// Example streak data (replace with real data as needed)
const streak = [
  { day: 'Monday', completed: true },
  { day: 'Tuesday', completed: true },
  { day: 'Wednesday', completed: true },
  { day: 'Thursday', completed: false },
  { day: 'Friday', completed: true },
  { day: 'Saturday', completed: false },
  { day: 'Sunday', completed: true },
];

const Learning = () => {
  return (
    <div className="space-y-8 px-8 py-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Learning Journey 🚀</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Subject Cards */}
        <div className="space-y-4">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} subject={subject} />
          ))}
        </div>

        {/* Right Column: Progress Streak */}
        <div className="flex justify-center items-center">
          <ProgressStreak streak={streak} />
        </div>
      </div>
    </div>
  );
};

export default Learning;
