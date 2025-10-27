import { motion } from "framer-motion";

export default function ComingSoonPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto"
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-4 sm:mb-6 flex items-center justify-center gap-2 flex-wrap"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <span className="whitespace-nowrap">Coming Soon</span>{" "}
          <motion.span
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            🚀
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-600 px-4 sm:px-6 md:px-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We're working hard to bring this category to you.
        </motion.p>

        <motion.div
          className="mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex justify-center space-x-2">
            <motion.div
              className="w-2 h-2 bg-green-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
            />
            <motion.div
              className="w-2 h-2 bg-green-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
            />
            <motion.div
              className="w-2 h-2 bg-green-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
