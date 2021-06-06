import { useRef } from 'react'
import {
    motion,
    useTransform,
    useViewportScroll,
} from 'framer-motion'
import React from 'react'

const ParallaxBox = props => {
    const { scrollY } = useViewportScroll()

    const ref = useRef

    const transformScrollToOffset = (scrollYValue) => {
        const element = ref.current

        if (!element) return 0

        // if (element.offsetTop !== 0) return 0

        return scrollYValue * -0.1
    }

    const y = useTransform(scrollY, transformScrollToOffset)

    return <motion.div ref={ref} {...props} style={{ y }}></motion.div>
}

export default ParallaxBox
