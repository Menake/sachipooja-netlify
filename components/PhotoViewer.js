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

    const PhotoContainer = ({ children, className }) => (
        <div className={`relative w-4/5 mx-auto mb-6 max-w-5xl ${className ?? ''}`}>
            {children}
        </div>
    )

    const Photo = ({ className, src, text, textClass }) => (
        <div className={className}>
            <img src={src} />
            <FadeText
                className={`italic sm:w-1/2 text-sm text-primary ${textClass ?? ""}`}
                duration={1}
            >
                {text}
            </FadeText>
        </div>
    );

    return (
        <div>
            <div className="relative flex flex-col w-screen mb-32 lg:mt-56">
                <PhotoContainer>
                    <InviteMessage className="w-full mb-20 mt-7 z-50 w-full xl:absolute xl:mt-10 xl:p-0 xl:w-2/5 xl:right-0" />

                    <Photo
                        className="w-full relative sm:w-1/2 z-10 lg:w-1/2 max-w-2xl"
                        src="/home-page/engagement-vertical.jpg"
                        text="01.21 Riverhead Villa, the day of the proposal" />

                    <Photo
                        className="w-full mt-20 right-0 sm:absolute sm:w-3/4 sm:top-1/2 lg:w-2/3 lg:top-1/2 xl:top-1/3 xl:w-2/3 z-0 max-w-3xl"
                        src="/home-page/engagement-horizontal.jpg"
                        text="A couple of hours after being engaged"
                        textClass="sm:float-right sm:text-right" />

                </PhotoContainer>


                <PhotoContainer className="z-10 sm:mt-20 lg:mt-48">
                    <FadeText className="w-full mb-20 mt-7 z-50 w-full xl:absolute xl:mt- xl:p-0 xl:w-2/5 xl:right-0" >
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
                        <Link href='/gallery'>
                            <div className='text-center font-bold text-white bg-primary rounded-md mt-7 p-2 cursor-pointer'>
                                Share Some of Our Moments
                            </div>
                        </Link>
                    </FadeText>

                    <Photo
                        className="w-full sm:w-1/2 relative z-10 max-w-2xl"
                        src="/home-page/first-wedding.jpg"
                        text="01.20 1 year ago at our first wedding together" />

                    <Photo
                        className="w-full mt-20 z-0 right-0 sm:absolute sm:w-3/4 sm:top-1/2 lg:w-2/3 lg:mt-0 lg:top-1/2 xl:w-2/3 max-w-3xl"
                        src="/home-page/milo.jpg"
                        text="Milo's guest appearance on the day"
                        textClass="sm:float-right sm:text-right" />
                </PhotoContainer>
            </div>
            <div className="absolute left-0 bottom-0 z-0 w-3/4 max-w-5xl opacity-25">
                <img src="/galle.png" className="object-fit" />
            </div>
        </div>
    )
}

export default PhotoViewer
