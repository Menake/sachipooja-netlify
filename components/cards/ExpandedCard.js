import { motion } from "framer-motion"

const ExpandedCard = ({ children, className }) => {
    return (
        <motion.div
            layoutId="expandable-card"
            transition={{
                type: "tween",
                ease: "linear",
                duration: 0.4
            }}
            className={`flex flex-col relative shadow-md rounded mx-4 lg:mx-20 ${className}`
            } >
            { children}
        </motion.div >
    )
}

export default ExpandedCard