import React from "react";
import { motion } from "framer-motion";


export const Aboutus = () => {
   
        
     
            
          
            const cardVariants = {
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            };
           
          
            return (
              <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                  What a Programming School Should Be
                </h1>
          
                <div className="grid gap-8 md:grid-cols-3">
                  {[{
                    title: "Supportive Learning Environment",
                    color: "text-blue-700",
                    content: "A programming school should foster a community where learners feel safe to experiment, ask questions, and grow at their own pace. Mentors and peers alike contribute to a culture of support and encouragement."
                  }, {
                    title: "Real-World Project Experience",
                    color: "text-green-700",
                    content: "The curriculum should be rooted in real-world problems and applications. Students gain hands-on experience with tools and workflows used by professional developers every day."
                  }, {
                    title: "Career-Focused Mentorship",
                    color: "text-purple-700",
                    content: "A great programming school pairs education with career preparation. Students receive mentorship on technical interviews, portfolios, and finding job opportunities in the tech industry."
                  }].map((card, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <h2 className={`text-2xl font-semibold mb-4 ${card.color}`}>{card.title}</h2>
                      <p className="text-gray-600">{card.content}</p>
                    </motion.div>
                  ))}
                </div>
          
                <div className="mt-12 flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-xl shadow-md transition"
                  >
                    Contact Us
                  </motion.button>
                </div>
              </div>
    )
}
