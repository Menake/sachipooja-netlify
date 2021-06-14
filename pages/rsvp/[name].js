import React from 'react'

import { db } from "../../firebase";
import DateCard from '@components/DateCard';

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
    const { name, numberOfGuests, events = [], canRsvp, addressedTo } = guest;

    return events.length > 0
        ? events.map(event => {
            return (
                <DateCard
                    key={event.id}
                    containerClass="mb-20 lg:mb-0"
                    event={event.name}
                    src={event.imageSrc}
                    date={event.date}
                    location={event.location}
                    name={name}
                    numberOfGuests={numberOfGuests}>
                    <div>
                        {event.blurb}
                    </div>
                </DateCard>
            )
        })
        : (<div className="h-screen w-screen flex flex-col justify-center items-center">
            <h1>Sorry you're not on the guest list</h1>
        </div>)
}

export default GuestRsvp