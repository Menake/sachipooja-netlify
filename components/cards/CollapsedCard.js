import { motion } from 'framer-motion'

import CardPhoto from '@components/cards/CardPhoto'

const CollapsedCard = ({ src, event, onClick, objectPosition }) => {
    return (
        <motion.div className="mx-5 lg:w-1/3 z-10">
            <CardPhoto src={src} heading={event} onClick={onClick} className="rounded-lg" objectPosition={objectPosition}></CardPhoto>
        </motion.div>
    )
}

export default CollapsedCard