import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { motion } from 'framer-motion'

import React from 'react'
import Link from 'next/link'

const InviteMessage = props => {
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
                duration: 3,
            },
        },
    }

    return (
        <motion.div
            {...props}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={messageVariants}
        >
            <div className="mt-7 sm:w-full">
                <h2 className="text-2xl md:text-4xl text-secondary">
                    The Invite
                </h2>
                <p>
                    We think you're pretty special and we'd love to have you
                    present to celebrate the start of our new chapter together
                </p>
            </div>
            <div className="pt-8 bg-s">
                <Link href="/rsvp" >
                    <div className="p-2 text-center rounded-md font-semibold bg-secondary text-white cursor-pointer">RSVP Here</div>
                </Link>
            </div>
        </motion.div>
    )
    return null
}

export default InviteMessage
