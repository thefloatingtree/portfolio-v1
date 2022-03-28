import { motion } from "framer-motion"

export default function Card({ title = "card" }) {
    return (
        <motion.div
            drag
            whileHover={{ scale: 1.05, translateY: -150 }}
            whileTap={{ cursor: "grabbing", scale: 1.2 }}
            dragSnapToOrigin={true}
            dragElastic={1}
            className="w-48 h-64 bg-white text-gray-600 rounded-md shadow-md cursor-pointer mb-[-12rem]">
            <div className="p-3 text-lg font-medium">{title}</div>
        </motion.div>
    )
}
