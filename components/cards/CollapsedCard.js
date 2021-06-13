import { motion } from 'framer-motion'

const CollapsedCard = ({ children, onClick, className }) => {
    return (
        <motion.div
            transition={{
                type: "tween",
                ease: "linear",
                duration: 0.4
            }}
            whileHover={{
                scale: 1.05,
                cursor: "pointer"
            }}
            layoutId="expandable-card"
            className={`flex flex-col relative shadow-md rounded mx-4 lg:mx-20 ${className}`}
            onClick={onClick}>
            {children}
        </motion.div>
    )
}

export default CollapsedCard