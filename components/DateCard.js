import { motion } from 'framer-motion'
import React, { useState } from 'react'

const DateCard = ({ className, event, src, date, children, location, numberOfGuests, name }) => {
    const [selectedNumberOfGuests, setSelectedNumberOfGuests] = useState(0);
    const guestsArray = Array.from({ length: numberOfGuests }, (_, i) => i + 1);

    const cardMotion = {
        rest: {

        },
        show: {
            height: '25rem',
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeIn"
            }
        }
    }

    const formMotion = {
        rest: {
            display: 'none'
        },
        show: {
            display: 'block',
            transition: {
                delay: 0.4,
                ease: "easeIn"
            }
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <motion.div className={`flex flex-col relative shadow-md rounded my-32 mx-4 lg:mx-20 lg:my-0 ${className}`}
            rest="rest"
            initial="rest"
            animate="rest"
            whileHover="show"
            whileFocus="show">
            <div className="mx-10 mt-5 flex flex-row justify-center items-center rounded shadow-md relative -top-10">
                <img className="relative z-0 h-full object-cover" src={src} />
                <div
                    className="z-20 absolute w-full h-full bg-black opacity-30 mx-10 p-2">
                </div>
                <h1 className="m-auto absolute z-30 text-4xl font-bold text-white">{event}</h1>

            </div>
            <motion.div
                className="flex flex-row w-full px-10"
                variants={cardMotion}>
                <motion.div
                    className="flex flex-col w-full justify-center items-evenly pb-10"
                    variants={formMotion}>
                    <h1 className="font-semibold text-xl uppercase text-center text-secondary">{date}</h1>
                    <div className="my-5 flex flex-row">
                        <h1 className="font-semibold uppercase mr-4 text-primary">Where:</h1>
                        <h1>{location}</h1>
                    </div>
                    {children}
                    <div className="font-semibold my-5 text-primary">Dress code and function details to follow.</div>
                    <form onSubmit={onFormSubmit}>
                        <input hidden readOnly value={name} />
                        <div className="flex flex-row items-center mb-5">
                            <h1 className="mr-10">Number of guests: </h1>
                            <div className="flex flex-row justify-evenly">
                                {(guestsArray.length > 1) && guestsArray.map(number => (
                                    <button
                                        key={number}
                                        onClick={() => setSelectedNumberOfGuests(number)}
                                        className="h-10 w-10 focus:ring-2 focus:ring-secondary focus:outline-none text-center rounded-full bg-gray-300 mr-10 cursor-pointer">
                                        {number}
                                    </button>
                                ))}
                            </div>
                            <input hidden defaultValue={selectedNumberOfGuests} />
                        </div>

                        <button type="submit" className="bg-primary w-full px-5 py-1 rounded text-white text-lg">I'm Coming!</button>
                    </form>
                </motion.div>
            </motion.div>
        </motion.div >
    )
}

export default DateCard