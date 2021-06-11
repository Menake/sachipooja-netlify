import {
    motion,
    useTransform,
    useViewportScroll,
} from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import useIsMobile from '../hooks/useIsMobile'

const ParallaxBox = ({ offsetFraction = -0.05, ...remainingProps }) => {
    const { scrollY } = useViewportScroll()
    const isMobile = useIsMobile()

    const [contentRef, inView] = useInView({
        triggerOnce: true
    });

    const transformScrollToOffset = (scrollYValue) => {
        if (!inView || isMobile) return 0

        return scrollYValue * offsetFraction
    }

    const y = useTransform(scrollY, transformScrollToOffset)

    return <motion.div ref={contentRef} {...remainingProps} style={{ y }}></motion.div>
}

export default ParallaxBox
