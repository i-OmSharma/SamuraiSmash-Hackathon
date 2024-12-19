/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const SubjectPieChart = ({ data }) => (
  <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-[400px] mx-auto">
    <h2 className="text-3xl font-semibold text-center mb-6">Overall Progress</h2>
    <PieChart width={350} height={350}> {/* Adjusted the size */}
      <Pie
        data={data}
        cx="50%" // Centered the pie chart horizontally
        cy="50%" // Centered the pie chart vertically
        innerRadius={70}
        outerRadius={90} // Increased the outer radius for better visibility
        paddingAngle={5}
        dataKey="progress"
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff" }} /> {/* Dark background for tooltip */}
      <Legend 
        verticalAlign="bottom" 
        height={36} 
        iconSize={12} 
        wrapperStyle={{ paddingTop: 10 }}
      />
    </PieChart>
  </div>
);

export default SubjectPieChart;
