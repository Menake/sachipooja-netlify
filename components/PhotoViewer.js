import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'

// import div from '@components/div'
import InviteMessage from '@components/InviteMessage'
import FadeText from '@components/FadeText'

const PhotoViewer = () => {
    const thisIsUsText = [
        'A shared love for dogs, cats & all things furry',
        'Self-proclaimed food critics',
        'Enjoy the company of our friends & family',
        'Lemon Lime & Bitters',
        'Bullet Journals',
    ]

    return (
        <div>
            <div className="lg:h-96"></div>
            <div className="relative flex flex-col w-screen">
                <div className="mt-7 p-10 absolute lg:mt-0 lg:p-0 lg:w-1/4 lg:right-1/5 lg:left-auto">
                    <InviteMessage className="w-full z-10 mb-20" />
                </div>
                <div className="h-96 lg:h-0"></div>
                <div className="relative w-full sm:h-screen">
                    <div className="h-full w-full px-10 relative sm:absolute sm:left-1/20 sm:w-1/2 z-10 lg:w-2/5 lg:left-1/10">
                        <img src='/home-page/engagement-vertical.jpg' />
                        <FadeText
                            className="italic sm:w-1/2 text-sm text-primary"
                            duration={1}
                        >
                            01.21 Riverhead Villa, the day of the proposal
                        </FadeText>
                    </div>
                    <div className="h-28 sm:h-0"></div>
                    <motion.div className="w-full h-full px-10 relative sm:absolute sm:w-3/4 sm:right-1/20 sm:top-1/10 lg:w-1/2 lg:right-1/10 lg:top-1/2">
                        <img src='/home-page/engagement-horizontal.jpg' />
                        <FadeText
                            className="italic text-sm text-primary sm:float-right"
                            duration={1}
                        >
                            A couple of hours after being engaged
                        </FadeText>
                    </motion.div>
                </div>
                <div className="h-96"></div>
                <div className="relative sm:h-screen w-full z-10">
                    <div className="h-full w-full px-10 sm:absolute sm:left-1/20 sm:w-1/2 md:left-1/10 z-10 lg:w-2/5">
                        <motion.div className="md:p-0">
                            <img src='/home-page/first-wedding.jpg' layout="fill" />
                            <FadeText
                                className="italic text-sm text-primary"
                                duration={1}
                            >
                                01.20 1 year ago at our first wedding together
                            </FadeText>
                        </motion.div>
                    </div>
                    <FadeText className="absolute px-10 -top-64 lg:mt-0 lg:p-0 lg:w-1/4 lg:right-1/5 lg:left-auto lg:top-1/10">
                        <div className="md:mt-7 w-full">
                            <h2 className="text-2xl md:text-4xl text-secondary">
                                This Is Us
                            </h2>
                            {thisIsUsText.map((text, index) => (
                                <FadeText
                                    key={index}
                                    className="italic"
                                    delay={index++}
                                    duration={1}
                                >
                                    {text}
                                </FadeText>
                            ))}
                        </div>
                    </FadeText>
                    <div className="h-48 sm:h-0"></div>
                    <motion.div className="w-full h-full px-10 relative bottom-20 sm:absolute sm:w-1/2 sm:right-1/5 sm:top-1/2 lg:bottom-0 lg:right-1/10">
                        <img src='/home-page/milo.jpg' layout="fill" />
                        <FadeText
                            className="italic text-sm text-primary sm:float-right"
                            duration={1}
                        >
                            Milo's guest appearance on the day
                        </FadeText>
                    </motion.div>
                </div>
            </div>
            <div className="relative">
                <img src='/galle.png' className="absolute left-0 bottom-0 z-0 w-3/4 opacity-25" />
            </div>
        </div>
    )
}

export default PhotoViewer
