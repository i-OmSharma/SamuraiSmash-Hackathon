import { motion } from 'framer-motion';

const Support = () => {
  const faqs = [
    {
      question: "How do I start learning?",
      answer: "Begin with the 'Watch & Learn' section on the home page. Follow the guided lessons and practice regularly!"
    },
    {
      question: "Can I track my progress?",
      answer: "Yes! Your progress is automatically tracked and displayed in beautiful charts on the Home and Learning pages."
    },
    {
      question: "How often should I practice?",
      answer: "We recommend following the schedule provided, but feel free to practice more if you'd like!"
    },
  ];

  const team = [
    { name: "Dr. Sarah Johnson", role: "Educational Director" },
    { name: "Mark Thompson", role: "Sign Language Expert" },
    { name: "Lisa Chen", role: "UX Designer" },
    { name: "James Wilson", role: "Developer" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-800">Support & Help 💡</h1>

      <div className="grid grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="p-4 border rounded-lg hover:border-primary transition-colors duration-300"
              >
                <h3 className="font-semibold text-lg text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📧</span> support@learnsign.edu
              </p>
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📞</span> +1 (555) 123-4567
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <div className="grid grid-cols-2 gap-4">
              {team.map((member, index) => (
                <div key={index} className="text-center p-4">
                  <p className="font-semibold text-primary">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Support;