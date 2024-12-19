/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const SubjectCard = ({ subject }) => (
  <Link to={`/watch-learn`}> {/* Link to WatchLearn with the subjectId */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-xl font-semibold" style={{ color: subject.color }}>
        {subject.name}
      </h3>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div
          className="h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${subject.progress}%`, backgroundColor: subject.color }}
        ></div>
      </div>
    </motion.div>
  </Link>
);

export default SubjectCard;
