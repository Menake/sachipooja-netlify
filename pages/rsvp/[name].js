import React from 'react'

import { db } from "../../firebase";
import Card from '@components/cards/Card';
import { AnimateSharedLayout } from 'framer-motion';

export const getServerSideProps = async (context) => {
    const guestName = context.params.name;

    const snapshot = await db.collection('guests')
        .where('name', '==', guestName)
        .limit(1)
        .get()

    // find the guests
    const guests = snapshot.docs.map(doc => doc.data())
    const guest = guests[0];

    if (!guest) return { props: { guest: {} } }


    // get the events for the guest
    const eventSnapshot = await db.collection('events').get()
    const guestEvents = eventSnapshot.docs
        .filter(doc => guest.events.includes(doc.id))
        .map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

    guest.events = guestEvents;

    return {
        props: { guest }
    }
}

const GuestRsvp = ({ guest }) => {
    const { name, numberOfGuests, events = [], canRsvp } = guest;

    return events.length > 0
        ? (
            <div className="h-screen w-screen">
                <div className="relative flex flex-col sm:flex-row h-full w-full justify-evenly items-center">

                    {events.map(event => (
                        <AnimateSharedLayout key={event.id}>
                            <Card
                                blurb={event.blurb}
                                event={event.name}
                                src={event.imageSrc}
                                date={event.date}
                                location={event.location}
                                objectPosition={event.imagePosition}
                                name={name}
                                canRsvp={canRsvp}
                                numberOfGuests={numberOfGuests} />
                        </AnimateSharedLayout>
                    ))}
                </div>
            </div>
        )
        : (<div className="h-screen w-screen flex flex-col justify-center items-center">
            <h1>Sorry you're not on the guest list</h1>
        </div>)
}

export default GuestRsvp