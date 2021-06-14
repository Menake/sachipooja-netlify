import React from 'react'

import { motion } from 'framer-motion'
import DateCard from '@components/DateCard'

const RsvpCards = ({ name }) => {
    return (
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
                    name={name}
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
                    name={name}
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
    )
}



export default RsvpCards