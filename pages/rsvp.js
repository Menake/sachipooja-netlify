import React, { useState } from 'react'

import receptionGuests from '../data/receptionGuests'
import ceremonyGuests from '../data/ceremonyGuests'
import { motion, AnimatePresence } from "framer-motion"
import DateCard from '@components/DateCard'

const Gallery = ({ ceremonyGuests, receptionGuests }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [showCeremony, setShowCeremony] = useState(true);
    const [showReception, setShowReception] = useState(true);
    const [showHero, setShowHero] = useState(false);

    const formSubmitted = (e) => {
        const name = `${firstName} ${lastName}`
        if (!name) return;

        setShowReception(receptionGuests.includes(name))
        setShowCeremony(ceremonyGuests.includes(name))

        setShowHero(false);

        e.preventDefault();
    }

    const getFullName = () => {
        return `${firstName} ${lastName}`
    }

    return (
        <div className="w-screen flex flex-col justify-center items-center lg:h-screen">
            <AnimatePresence>
                {
                    showHero && (
                        <motion.div
                            className="h-full w-full bg-primary text-white"
                            initial={{ y: 0 }}
                            exit={{ y: '-100%' }}
                            transition={{ duration: 1 }}
                        >
                            {/* <img src="/kea.png" className="w-full absolute z-0 object-fll" /> */}
                            <div className="relative z-0 w-full h-full">
                                <div className="flex flex-row justify-center">
                                    <h1 className="text-5xl text-secondary font-semibold mt-20 h-1/5">Enter your name to see the dates</h1>
                                </div>
                                <div className="flex flex-col justify-center h-4/5">
                                    <form onSubmit={formSubmitted} className="text-lg">
                                        <label className="text-white"></label>
                                        <div className="w-full flex flex-row justify-center h-12">
                                            <input
                                                type="text"
                                                name="name"
                                                className="bg-transparent border-b-2 border-secondary w-1/4 mr-20 placeholder-white outline-none focus:ring-secondary"
                                                placeholder="First Name"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}></input>
                                            <input
                                                type="text"
                                                name="name"
                                                className="bg-transparent border-b-2 border-secondary w-1/4 mr-20 placeholder-white outline-none focus:ring-secondary"
                                                placeholder="Last Name"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}></input>
                                            <button className="bg-secondary rounded-md px-5 text-white" type="submit" >Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>

            <AnimatePresence>
                {!showHero && (
                    <motion.div
                        className="flex flex-col mt-40 py-5 items-center justify-center lg:flex-row lg:h-full"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}>
                        {showCeremony && (
                            <DateCard
                                containerClass="mb-20 lg:mb-0"
                                event="Ceremony"
                                src="/ceremony.jpg"
                                date="21st November"
                                location="Shree Swaminarayan Temple Auckland 10/12 Wentworth Avenue, Papatoetoe, Auckland, 2025"
                                name={getFullName()}
                                numberOfGuests={3}>
                                <div>
                                    We invite you to eat, sing, laugh and dance with us at our traditional Indian and Sri Lankan wedding ceremonies on this auspicious day.
                            </div>
                            </DateCard>
                        )}
                        {showReception && (
                            <DateCard
                                event="Reception"
                                src="/reception.jpg"
                                date="27th November"
                                location="Turanga Creek"
                                name={getFullName()}
                                numberOfGuests={3}>
                                Join us at a light hearted and fun reception to celebrate our love. Dancing and laughing your hearts out with us is compulsory.
                            </DateCard>
                        )}
                        {
                            (!showCeremony && !showReception) && (
                                <div>
                                    Unfortunately we don't have you on our guest list. If you are coming with a partner or family please check with them if they have an invite
                                </div>
                            )
                        }
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            ceremonyGuests,
            receptionGuests
        }
    }
}

export default Gallery