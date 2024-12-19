import ProgressChart from '../components/charts/ProgressChart';

const Progress = () => {
  const progressData = [
    { subject: 'Number', progress: 75, time: 120 },
    { subject: 'Alphabet', progress: 60, time: 90 },
    { subject: 'Greeting', progress: 90, time: 150 },
    { subject: 'Sign', progress: 85, time: 100 },
  ];

  return (
    <div
      className="min-h-screen p-6"
      style={{
        background: 'linear-gradient(to bottom right, #a8d0f0, #dbefff)', // Contrasting blue shades
      }}
    >
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-indigo-800 mb-6">Progress</h1>
        <ProgressChart data={progressData} />
      </div>
    </div>
  );
};

export default Progress;
