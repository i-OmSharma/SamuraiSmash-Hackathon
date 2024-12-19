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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Support & Help 💡
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
        >
          <h2 className="text-3xl font-bold text-gradient mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <h3 className="font-semibold text-lg text-blue-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Us & Team Section */}
        <div className="space-y-8">
          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-3xl font-bold text-gradient mb-6">
              Contact Us
            </h2>
            <div className="space-y-4">
              <p className="flex items-center text-gray-700 text-lg">
                <span className="mr-3 text-indigo-500">📧</span>
                support@learnsign.edu
              </p>
              <p className="flex items-center text-gray-700 text-lg">
                <span className="mr-3 text-green-500">📞</span>
                +1 (555) 123-4567
              </p>
            </div>
          </motion.div>

          {/* Our Team */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-3xl font-bold text-gradient mb-6">
              Our Team
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                >
                  <p className="font-semibold text-indigo-800">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Support;
