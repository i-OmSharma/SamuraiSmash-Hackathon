import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'; // Import styles
import './ProgressStreak.css'; // For custom animations

const ProgressStreak = ({ streak }) => {
  // Helper function to break streak data into weeks (5 days per row)
  const getWeeks = (streakData) => {
    const weeks = [];
    let week = [];
    streakData.forEach((day, index) => {
      week.push(day);
      if (week.length === 5 || index === streakData.length - 1) {
        weeks.push(week);
        week = [];
      }
    });
    return weeks;
  };

  // Example streak data with 15 days
  const streakData = [
    { date: "2024-01-01", completed: true, progress: 100 },
    { date: "2024-01-02", completed: false, progress: 50 },
    { date: "2024-01-03", completed: true, progress: 100 },
    { date: "2024-01-04", completed: false, progress: 40 },
    { date: "2024-01-05", completed: true, progress: 100 },
    { date: "2024-01-06", completed: false, progress: 60 },
    { date: "2024-01-07", completed: true, progress: 100 },
    { date: "2024-01-08", completed: false, progress: 20 },
    { date: "2024-01-09", completed: true, progress: 100 },
    { date: "2024-01-10", completed: false, progress: 30 },
    { date: "2024-01-11", completed: true, progress: 100 },
    { date: "2024-01-12", completed: false, progress: 70 },
    { date: "2024-01-13", completed: true, progress: 100 },
    { date: "2024-01-14", completed: false, progress: 80 },
    { date: "2024-01-15", completed: true, progress: 100 },
  ];

  // Get weeks from the first 10 days
  const first10Days = streakData.slice(0, 10);
  const weeks = getWeeks(first10Days);

  // Get the last 5 days
  const last5Days = streakData.slice(10);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg mx-auto" style={{ height: 'auto', minHeight: '430px' }}>
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">
        Weekly Streak Tracker
      </h2>

      {/* Weeks Display for first 10 days */}
      <div className="space-y-6">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-5 gap-6">
            {week.map((day, dayIndex) => {
              const progress = day.completed ? 100 : day.progress ? day.progress : 0;
              const progressColor = progress === 100 ? '#4CAF50' : progress >= 50 ? '#FFEB3B' : '#F44336'; // Green, Yellow, Red

              return (
                <div key={dayIndex} className="flex flex-col items-center text-center">
                  <div className="circle-container flex justify-center items-center mb-4">
                    <CircularProgressbar
                      value={progress}
                      text={`${progress.toFixed(0)}%`}
                      strokeWidth={10}
                      styles={{
                        path: { stroke: progressColor },
                        trail: { stroke: "#ddd" },
                        text: { fill: progressColor, fontSize: '1.2rem', fontWeight: 'bold' }
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-600">{new Date(day.date).getDate()}</p>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Additional row for 5 more circles */}
      <div className="grid grid-cols-5 gap-6 mt-8">
        {last5Days.map((day, index) => {
          const progress = day.completed ? 100 : day.progress ? day.progress : 0;
          const progressColor = progress === 100 ? '#4CAF50' : progress >= 50 ? '#FFEB3B' : '#F44336'; // Green, Yellow, Red

          return (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="circle-container flex justify-center items-center mb-4">
                <CircularProgressbar
                  value={progress}
                  text={`${progress.toFixed(0)}%`}
                  strokeWidth={10}
                  styles={{
                    path: { stroke: progressColor },
                    trail: { stroke: "#ddd" },
                    text: { fill: progressColor, fontSize: '1.2rem', fontWeight: 'bold' }
                  }}
                />
              </div>
              <p className="text-xs text-gray-600">{new Date(day.date).getDate()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressStreak;
