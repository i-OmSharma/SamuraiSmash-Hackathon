import { motion } from 'framer-motion';

const Schedule = () => {
  const schedule = [
    {
      day: 'Monday',
      activities: [
        { time: '09:00 AM', subject: 'Numbers Practice', duration: '45 min' },
        { time: '10:00 AM', subject: 'Break', duration: '15 min' },
        { time: '10:15 AM', subject: 'Alphabet Learning', duration: '45 min' },
      ],
      bgColor: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
    },
    {
      day: 'Wednesday',
      activities: [
        { time: '09:00 AM', subject: 'Sign Language Basics', duration: '45 min' },
        { time: '10:00 AM', subject: 'Break', duration: '15 min' },
        { time: '10:15 AM', subject: 'Interactive Games', duration: '45 min' },
      ],
      bgColor: 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500',
    },
    {
      day: 'Friday',
      activities: [
        { time: '09:00 AM', subject: 'Greetings Practice', duration: '45 min' },
        { time: '10:00 AM', subject: 'Break', duration: '15 min' },
        { time: '10:15 AM', subject: 'Progress Assessment', duration: '45 min' },
      ],
      bgColor: 'bg-gradient-to-r from-green-500 via-teal-500 to-blue-400',
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-800">Weekly Schedule 📅</h1>

      <div className="grid gap-6">
        {schedule.map((day, dayIndex) => (
          <motion.div
            key={dayIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: dayIndex * 0.2 }}
            className={`rounded-xl shadow-lg overflow-hidden ${day.bgColor}`}
          >
            <div className="p-4 text-white">
              <h2 className="text-xl font-bold">{day.day}</h2>
            </div>
            <div className="bg-white p-4">
              {day.activities.map((activity, actIndex) => (
                <div
                  key={actIndex}
                  className="flex items-center p-4 border-b last:border-b-0"
                >
                  <div className="w-24 text-gray-600">{activity.time}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      {activity.subject}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Duration: {activity.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
