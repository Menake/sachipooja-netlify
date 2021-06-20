import React, { useState } from 'react'

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
    const guests = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    const guest = guests[0];

    if (!guest) return { props: { guest: {} } }

    const guestEvents = (await db.collection('guests').doc(guest.id).collection('events').get()).docs
        .map(doc => ({ id: doc.id, ...doc.data() }));

    console.log(guestEvents)

    const guestEventIds = guestEvents.map(event => event.eventId);

    // get the events for the guest
    // Shitty query for now, will clean up later
    const events = (await db.collection('events').orderBy('sortOrder', 'asc').get()).docs
        .filter(doc => guestEventIds.includes(doc.id))
        .map(doc => {
            const guestEvent = guestEvents.find(e => e.eventId === doc.id);
            return {
                id: doc.id,
                ...doc.data(),
                guestEventId: guestEvent.id,
                hasRsvpd: guestEvent.hasRsvpd
            }
        })

    console.log(events);

    guest.events = events;

    return {
        props: { guest }
    }
}

const GuestRsvp = ({ guest }) => {
    const { id, name, numberOfGuests, events = [], canRsvp } = guest;
    return events.length > 0
        ? (
            <div className="h-screen w-screen">
                <div className="relative flex flex-col sm:flex-row h-full w-full justify-evenly items-center">
                    {events.map(event => (
                        <AnimateSharedLayout key={event.id}>
                            <Card
                                id={id}
                                event={event}
                                name={name}
                                canRsvp={canRsvp}
                                numberOfGuests={numberOfGuests} />
                        </AnimateSharedLayout>
                    ))}
                </div>
            </div>
        )
        : (<div className="h-screen w-screen flex flex-col justify-center items-center">
            <h1>Oops! Something went wrong, please get in touch with Pooja or Sachintha and we’ll help you get to the right place</h1>
        </div>)
}

export default GuestRsvp