import React from 'react'

import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className="h-screen relative z-0">
            <div className="w-3/4 absolute right-0 bottom-0 lg:w-1/2 lg:-bottom-1/4 z-0 opacity-25">
                <img src='/bangalore-min.png' priority={true} />
            </div>
            <div className="h-full w-screen flex flex-col justify-center items-center z-10">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 1.5 },
                    }}
                    className="text-center w-3/4 text-4xl md:text-8xl font-bold text-primary"
                >
                    {'Sachi & Pooja are'}
                    <br />
                    getting <span className="text-secondary">Married.</span>
                </motion.div>
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 1.5, delay: 1.5 },
                    }}
                >
                    <div className="absolute bottom-10 right-10 text-2xl md:text-6xl font-bold text-secondary float-right">
                        Nov<span className="text-primary">21</span>
                    </div>
                </motion.div>
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 3 } }}
                >
                    <div className="absolute flex justify-center bottom-10 inset-x-0 w-full">
                        <motion.img
                            transition={{
                                y: {
                                    duration: 0.4,
                                    yoyo: 'Infinity',
                                    ease: 'easeOut',
                                },
                            }}
                            animate={{ y: [0, -15] }}
                            className="w-8 sm:w-11"
                            src="/arrow.svg"
                        />
                    </div>
                </motion.div>
            </div>
        </div >
    )
}

export default Hero
