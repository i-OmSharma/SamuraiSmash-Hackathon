/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const SubjectPieChart = ({ data }) => (
  <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-[400px] mx-auto">
    <h2 className="text-3xl font-semibold text-center mb-6">Overall Progress</h2>
    <PieChart width={350} height={350}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={100}
        paddingAngle={5}
        dataKey="progress"
        isAnimationActive={true} // Enables animations
        animationBegin={0} // Delay before animation starts
        animationDuration={1500} // Animation duration in milliseconds
        animationEasing="ease-out" // Smooth easing effect
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{ backgroundColor: "#333", color: "#fff" }}
        formatter={(value) => `${value}%`} // Show progress as a percentage
      />
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
