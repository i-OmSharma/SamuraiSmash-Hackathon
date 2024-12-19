/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const ActionButton = ({ title, description }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-glow"
  >
    <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.button>
);

export default ActionButton;