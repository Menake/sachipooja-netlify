import React from 'react'
import Link from "next/link"
import InviteMessage from '@components/InviteMessage'
import FadeText from '@components/FadeText'
import ParallaxBox from '@components/ParallaxBox'

const PhotoViewer = () => {
    const thisIsUsText = [
        'A shared love for dogs, cats & all things furry',
        'Can\'t live without Indian & Sri Lankan food',
        'Self-proclaimed photographers and food critics',
        'Cookies, lemon lime bitters & fries ',
        'Obsessed with our family and loved ones'
    ]

    return (
        <div>
            <div className="lg:h-96"></div>
            <div className="relative flex flex-col w-screen mb-32">
                <div className="mt-7 p-10 absolute z-50 lg:mt-0 lg:p-0 lg:w-1/4 lg:right-1/5 lg:left-auto">
                    <InviteMessage className="w-full mb-20" />
                </div>
                <div className="h-96 lg:h-0"></div>
                <div className="relative w-full sm:h-screen">
                    <div className="w-full px-10 relative sm:absolute sm:left-1/20 sm:w-1/2 z-10 lg:w-2/5 lg:left-1/10">
                        <img src='/home-page/engagement-vertical.jpg' />
                        <FadeText
                            className="italic sm:w-1/2 text-sm text-primary"
                            duration={1}
                        >
                            01.21 Riverhead Villa, the day of the proposal
                        </FadeText>
                    </div>
                    <div className="h-28 sm:h-0"></div>
                    <ParallaxBox offsetFraction={-0.08} className="w-full px-10 relative sm:absolute sm:w-3/4 sm:right-1/20 sm:top-1/10 lg:w-1/2 lg:right-1/10 lg:top-1/2">
                        <img src='/home-page/engagement-horizontal.jpg' />
                        <FadeText
                            className="italic text-sm text-primary sm:float-right"
                            duration={1}
                        >
                            A couple of hours after being engaged
                        </FadeText>
                    </ParallaxBox>
                </div>
                <div className="h-96"></div>
                <div className="relative sm:h-screen w-full z-10">
                    <div className="w-full px-10 sm:absolute sm:left-1/20 sm:w-1/2 md:left-1/10 z-10 lg:w-2/5">
                        <div className="md:p-0">
                            <img src='/home-page/first-wedding.jpg' layout="fill" />
                            <FadeText
                                className="italic text-sm text-primary"
                                duration={1}
                            >
                                01.20 1 year ago at our first wedding together
                            </FadeText>
                        </div>
                    </div>
                    <FadeText className="absolute px-10 -top-72 lg:mt-0 lg:p-0 lg:w-1/4 lg:right-1/5 lg:left-auto lg:top-1/20">
                        <div className="w-full">
                            <h2 className="text-2xl md:text-4xl text-secondary mb-5">
                                This Is Us
                            </h2>
                            {thisIsUsText.map((text, index) => (
                                <FadeText
                                    key={index}
                                    className="italic text-sm"
                                    delay={index++}
                                    duration={1}
                                >
                                    {text}
                                </FadeText>
                            ))}
                            <div className='text-center font-bold text-white bg-primary rounded-md mt-7 p-2 cursor-pointer'>
                                <Link href='/gallery'>
                                    Share Some of Our Moments
                                </Link>
                            </div>
                        </div>
                    </FadeText>
                    <div className="h-48 sm:h-0"></div>
                    <ParallaxBox className="w-full px-10 relative bottom-20 sm:absolute sm:w-1/2 sm:right-1/5 sm:top-1/2 lg:bottom-0 lg:right-1/10">
                        <img src='/home-page/milo.jpg' layout="fill" />
                        <FadeText
                            className="italic text-sm text-primary sm:float-right"
                            duration={1}
                        >
                            Milo's guest appearance on the day
                        </FadeText>
                    </ParallaxBox>
                </div>
            </div>
            <div className="relative ">
                <img src='/galle.png' className="absolute left-0 bottom-0 z-0 w-3/4 opacity-25" />
            </div>
        </div>
    )
}

export default PhotoViewer
