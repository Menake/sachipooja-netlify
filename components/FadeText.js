import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'

const FadeText = ({ children, duration = 0, delay = 0, ...rest }) => {
    const controls = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
        const controlToStart = inView ? 'visible' : 'hidden'
        controls.start(controlToStart)
    }, [controls, inView])

    const messageVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration,
                delay
            },
        },
    }

    return (
        <motion.div
            {...rest}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={messageVariants}
        >
            {children}
        </motion.div>
    )
}

export default FadeText
