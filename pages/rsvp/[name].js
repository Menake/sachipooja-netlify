import React, { useState } from 'react'

import { db } from "../../firebase";
import { AnimateSharedLayout } from 'framer-motion';
import Link from "next/link";
import Card from '@components/cards/Card';

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

const HomeButton = () => (
    <div className="w-full h-1/10 z-10">
        <Link href="/" >
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-5 mt-8 h-8 w-8 text-primary cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        </Link>
    </div>
)

const GuestRsvp = ({ guest }) => {
    const { addressedTo, id, name, numberOfGuests, events = [] } = guest;
    return events.length > 0
        ? (
            <div className="h-full w-full absolute min-h-[800px]">
                <HomeButton />
                <div className="relative w-full h-1/10 mt-10 mb-10 sm:mb-0 sm:pt-20">
                    <p className="text-center h-10 mx-5 my-auto text-3xl font-semibold sm:text-4xl text-secondary">Dear {addressedTo}</p>
                </div>
                <div className="relative w-full h-4/5 flex flex-col sm:flex-row w-full justify-evenly items-center overflow-auto">
                    {events.map(event => (
                        <AnimateSharedLayout key={event.id}>
                            <Card
                                id={id}
                                event={event}
                                name={name}
                                numberOfGuests={numberOfGuests} />
                        </AnimateSharedLayout>
                    ))}
                </div>
            </div>
        )
        : (
            <div className="h-screen w-screen flex flex-col justify-center items-center">
                <h1>Oops! Something went wrong, please get in touch with Pooja or Sachintha and we’ll help you get to the right place</h1>
            </div>
        )
}

export default GuestRsvp