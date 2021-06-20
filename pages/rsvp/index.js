import React, { useState } from 'react'

import { motion } from "framer-motion"
import { useRouter } from 'next/router'

const Rsvp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const router = useRouter();

    const fullName = () => `${firstName} ${lastName}`;

    const onSubmit = (e) => {
        e.preventDefault();
        router.push(`/rsvp/${fullName()}`)
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
            <motion.div className="h-full w-full bg-cream text-primary">
                <img src="/kea.png" className="w-full sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-1/3 absolute z-0 bottom-0 left-0" />
                <div className="absolute bottom-0 left-0 z-10 text-sm pl-5 pb-2">Kea by <a className="text-secondary" href="https://www.shutterstock.com/g/art_of_line">art of line</a></div>
                <div className="relative z-0 w-full h-full">
                    <div className="w-full flex flex-col text-center justify-center px-8">
                        <h1 className="text-3xl text-secondary font-semibold mt-20">We're so excited to share our special day with you!</h1>
                        <p className="text-primary mt-10">Please enter your name below to see the dates</p>
                    </div>
                    <form className="flex w-full flex-col justify-start items-center h-4/5 pt-16">
                        <input
                            type="text"
                            name="name"
                            className="bg-transparent border-b-2 border-secondary w-3/4 lg:w-1/2 mb-10 placeholder-black placeholder-opacity-50 text-secondary outline-none focus:ring-secondary"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}></input>
                        <input
                            type="text"
                            name="name"
                            className="bg-transparent border-b-2 border-secondary w-3/4 lg:w-1/2 mb-10 placeholder-black placeholder-opacity-50 text-secondary outline-none focus:ring-secondary"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}></input>
                        <button type="submit" onClick={onSubmit} className="bg-secondary rounded-md text-white font-semibold text-center cursor-pointer w-3/4 lg:w-1/2 md:h-8" >See the Dates!</button>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}

export default Rsvp