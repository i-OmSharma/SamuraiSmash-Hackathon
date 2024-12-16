import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// eslint-disable-next-line react/prop-types
const ProgressChart = ({ data }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
    <LineChart width={800} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="subject" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="progress" stroke="#4F46E5" />
      <Line type="monotone" dataKey="time" stroke="#10B981" />
    </LineChart>
  </div>
);

export default ProgressChart; // <-- Default export added
