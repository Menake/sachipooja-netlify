import React from 'react'
import Link from "next/link"
import InviteMessage from '@components/InviteMessage'
import FadeText from '@components/FadeText'

const PhotoViewer = () => {
    const thisIsUsText = [
        'A shared love for dogs, cats & all things furry',
        'Can\'t live without Indian & Sri Lankan food',
        'Self-proclaimed photographers and food critics',
        'Cookies, lemon lime bitters & fries ',
        'Obsessed with our family and loved ones'
    ]

    const PhotoContainer = ({ children, className }) => {
        return (
            <div className={`relative w-4/5 mx-auto mb-6 sm:h-screen ${className ?? ''}`}>
                {children}
            </div>
        )
    }

    return (
        <div>
            <div className="lg:h-96"></div>
            <div className="relative flex flex-col w-screen mb-32">
                <PhotoContainer>
                    <div
                        className="mt-7 z-50 w-full lg:absolute lg:mt-32 lg:p-0 lg:w-2/5 lg:right-0">
                        <InviteMessage className="w-full mb-20" />
                    </div>

                    <div className="w-full relative sm:absolute sm:w-1/2 z-10 lg:w-1/2">
                        <img src='/home-page/engagement-vertical.jpg' />
                        <FadeText
                            className="italic sm:w-1/2 text-sm text-primary"
                            duration={1}
                        >
                            01.21 Riverhead Villa, the day of the proposal
                        </FadeText>
                    </div>
                    <div
                        offsetFraction={-0.08}
                        className="w-full sm:absolute mt-20 right-0 sm:w-3/4 sm:top-1/2 lg:w-3/4 lg:top-1/3 z-0">
                        <img src='/home-page/engagement-horizontal.jpg' />
                        <FadeText
                            className="italic text-sm text-primary sm:float-right"
                            duration={1}
                        >
                            A couple of hours after being engaged
                        </FadeText>
                    </div>
                </PhotoContainer>
                <div className="sm:h-48 2xl:h-96"></div>
                <PhotoContainer className="z-10 mt-20">
                    <FadeText className="w-full mb-20 sm:mb-28 lg:absolute lg:right-0 lg:w-2/5 lg:mb-0">
                        <div className="w-full">
                            <h2 className="text-2xl md:text-4xl text-secondary mb-5">
                                This Is Us
                            </h2>
                            {thisIsUsText.map((text, index) => (
                                <FadeText
                                    key={index}
                                    className="italic lg:text-base lg:not-italic"
                                    delay={index++}
                                    duration={1}
                                >
                                    {text}
                                </FadeText>
                            ))}
                        </div>
                        <div className='text-center font-bold text-white bg-primary rounded-md mt-7 p-2 cursor-pointer'>
                            <Link href='/gallery'>
                                Share Some of Our Moments
                            </Link>
                        </div>
                    </FadeText>

                    <div className="w-full mb-32 sm:absolute sm:w-1/2 z-10">
                        <div className="md:p-0">
                            <img src='/home-page/first-wedding.jpg' layout="fill" />
                            <FadeText
                                className="italic text-sm text-primary sm:w-1/2"
                                duration={1}
                            >
                                01.20 1 year ago at our first wedding together
                            </FadeText>
                        </div>
                    </div>

                    <div className="sm:h-48"></div>
                    <div className="w-full mt-32 relative right-0 sm:mt-96 sm:absolute sm:w-3/4">
                        <img src='/home-page/milo.jpg' layout="fill" />
                        <FadeText
                            className="italic text-sm text-primary sm:float-right"
                            duration={1}
                        >
                            Milo's guest appearance on the day
                        </FadeText>
                    </div>
                </PhotoContainer>
            </div>
            <div className="absolute left-0 bottom-0 z-0 w-3/4 opacity-25">
                <img src="/galle.png" className="object-fit" />
            </div>
        </div>
    )
}

export default PhotoViewer
