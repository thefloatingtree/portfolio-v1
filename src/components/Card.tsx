import { motion } from "framer-motion"

export default function Card() {
  return (
      <motion.div drag className="w-16 h-16 bg-red-500 text-white">
          Testing!
      </motion.div>
  )
}
