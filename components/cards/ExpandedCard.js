import { AnimateSharedLayout, motion } from "framer-motion"
import { useState } from 'react';

import CardPhoto from '@components/cards/CardPhoto';

const ExpandedCard = ({ canRsvp, eventName, src, date, guestEventId, hasRsvpd, id, blurb, location, numberOfGuests, name, objectPosition, onClick, onFormSubmit }) => {
    const [selectedNumberOfGuests, setSelectedNumberOfGuests] = useState(0);
    const guestsArray = Array.from({ length: numberOfGuests }, (_, i) => i + 1);

    const showRsvpForm = canRsvp && !hasRsvpd;

    const NumberInput = ({ isSelected, number, onClick }) => {
        return (
            <motion.li
                initial={false}
                animate={{
                    backgroundColor: isSelected ? '#112700' : '#A9935A'
                }}
                className="h-8 w-8 m-1 md:h-10 md:w-10 text-center pb-1 flex flex-col justify-center font-bold text-white rounded-full bg-secondary cursor-pointer"
                onClick={onClick} >
                <h1 className="mt-1">{number}</h1>
            </motion.li>
        )
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        await fetch(`/api/rsvp/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ attendingGuests: selectedNumberOfGuests, guestEventId })
        });

        onFormSubmit(guestEventId);
    }

    const RsvpForm = () => {
        return (
            <form className="mt-5 2xl:text-lg absolute bottom-10 w-full" onSubmit={onSubmit}>
                <input hidden readOnly value={name} />
                <input hidden defaultChecked={guestsArray.length > 1 ? selectedNumberOfGuests : 1} />
                {guestsArray.length > 1
                    ? (
                        <div className="flex flex-row items-center justify-evenly mb-10">
                            <h1 className="font-semibold w-2/5 lg:w-1/5 xl:w-2/5 text-primary text-left lg:text-left">Number of guests: </h1>
                            <AnimateSharedLayout type="crossfade" transition={{ duration: 0.1 }}>
                                <ul className="w-3/5 lg:w-4/5 xl:w-3/5 flex flex-row flex-wrap justify-evenly">
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
                                </ul>
                            </AnimateSharedLayout>
                        </div>
                    ) : null}
                <button type="submit" className="asbolute bottom-10 bg-primary text-white rounded-md w-full text-base py-2" >I'm coming!</button>
            </form>
        )
    }

    return (
        <motion.div className="h-screen w-screen absolute z-30 bg-white sm:min-h-20">
            <div className="h-full w-full">
                <div className="fixed top-0 h-full sm:h-4/5 xl:h-5/6 w-full sm:w-4/5 2xl:w-1/2 sm:inset-y-1/20 sm:inset-x-1/10 2xl:inset-x-1/4 m-auto rounded-md">
                    <CardPhoto src={src} heading={eventName} className="h-1/3 lg:h-2/5 lg:rounded-t-lg" onClick={onClick} objectPosition={objectPosition} />
                    <motion.div className="h-2/3 lg:h-3/5 px-10 shadow-md lg:rounded-b-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.2 }} >
                        <div className="relative h-full">
                            <h1 className="pt-10 relative text-center text-lg 2xl:text-4xl uppercase font-semibold text-secondary sm:mb-10">{date}</h1>
                            <div className="relative flex flex-row mt-2 2xl:text-lg">
                                <h1 className="mr-4 font-semibold text-primary">Where: </h1>
                                <p>{location}</p>
                            </div>
                            <div className="mt-5 xl:mt-10 2xl:text-lg">
                                {blurb}
                            </div>
                            {
                                showRsvpForm
                                    ? <RsvpForm />
                                    : <div className="absolute bottom-10 w-full italic">
                                        You have already Rsvpd for this event. If you think this is an error or the number of guests attending has changed please get in touch with Sachintha or Pooja.
                                    </div>
                            }
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default ExpandedCard