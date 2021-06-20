import { motion } from "framer-motion"

const CardPhoto = ({ src, heading, className, onClick, objectPosition = "object-top" }) => {
    console.log(objectPosition);

    return (
        <motion.div
            layoutId="expandable-card"
            className={`flex flex-row relative justify-center items-center overflow-hidden cursor-pointer ${className}`}
            onClick={onClick}>
            <img src={src} className={`h-full w-full object-cover ${objectPosition}`} />
            <div className="absolute w-full h-full bg-black opacity-30">
            </div>
            <h1 className="absolute text-4xl font-bold text-white">{heading}</h1>
        </motion.div>
    )
}

export default CardPhoto