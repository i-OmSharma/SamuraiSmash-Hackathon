import ProgressChart from '../components/charts/ProgressChart';

const Progress = () => {
  const progressData = [
    { subject: 'Number', progress: 75, time: 120 },
    { subject: 'Alphabet', progress: 60, time: 90 },
    { subject: 'Greeting', progress: 90, time: 150 },
    { subject: 'Sign', progress: 85, time: 100 }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Progress</h1>
      <ProgressChart data={progressData} />
    </div>
  );
};

export default Progress;