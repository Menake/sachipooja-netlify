import { AnimateSharedLayout, motion } from 'framer-motion'
import React, { useState } from 'react'
import CardPhoto from './cards/CardPhoto';
import CollapsedCard from './cards/CollapsedCard';
import ExpandedCard from './cards/ExpandedCard';

const DateCard = ({ containerClass, expandedClass, event, src, date, children, location, numberOfGuests, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedNumberOfGuests, setSelectedNumberOfGuests] = useState(0);
    const guestsArray = Array.from({ length: numberOfGuests }, (_, i) => i + 1);

    const toggleOpen = () => setIsOpen(!isOpen)

    const NumberInput = ({ isSelected, number, onClick }) => {
        return (
            <div
                className={`h-8 w-8 text-center font-bold text-white rounded-full bg-secondary cursor-pointer ${isSelected ? "ring-2 ring-primary" : ""}`}
                onClick={onClick}>
                <h1 className="mt-1">{number}</h1>
            </div>
        )
    }

    const Content = () => {
        return (
            <motion.div className="px-5 text-sm md:text-base">
                <h1 className="w-full text-center text-lg uppercase font-semibold text-secondary">{date}</h1>
                <div className="w-full flex flex-row mt-2">
                    <h1 className="mr-4 font-semibold text-primary">Where: </h1>
                    <p>{location}</p>
                </div>
                <div className="mt-4">
                    {children}
                </div>
                <form className="mt-4">
                    <input hidden readOnly value={name} />
                    <input hidden defaultChecked={guestsArray.length > 1 ? selectedNumberOfGuests : 1} />
                    {guestsArray.length > 1
                        ? (
                            <div className="w-full flex flex-row ">
                                <h1 className="mr-4 w-1/4 font-semibold text-primary">Number of guests: </h1>
                                <div className="w-3/4 flex flex-row justify-evenly">
                                    <AnimateSharedLayout>
                                        {
                                            guestsArray.map(number => (
                                                <NumberInput
                                                    key={number}
                                                    number={number}
                                                    isSelected={selectedNumberOfGuests === number}
                                                    onClick={() => setSelectedNumberOfGuests(number)}
                                                />
                                            ))
                                        }
                                    </AnimateSharedLayout>
                                </div>
                            </div>
                        ) : null}
                    <button type="submit" className="my-4 bg-primary text-white rounded-md w-full text-base py-2" >I'm coming!</button>
                </form>
            </motion.div>
        )
    }

    return (
        <AnimateSharedLayout>
            <div className={`relative ${containerClass ?? ""}`}>
                {isOpen
                    ? (
                        <ExpandedCard className={expandedClass ?? ""}>
                            <CardPhoto src={src} heading={event} onClick={toggleOpen}
                            // className="relative -top-10"
                            />
                            <motion.div>
                                <Content />
                            </motion.div>
                        </ExpandedCard>
                    )
                    : (
                        <CollapsedCard className="lg:relative lg:top-0">
                            <CardPhoto src={src} heading={event} onClick={toggleOpen}
                            // className="relative -top-10"
                            />
                        </CollapsedCard>
                    )}
            </div>
        </AnimateSharedLayout>
    )
}

export default DateCard