import React, { useEffect, useState } from 'react'

const Admin = () => {
    const [guestRsvps, setGuestRsvps] = useState([]);

    const ceremonyInvites = guestRsvps.filter(guest => guest.events.some(event => event.name === 'Ceremony')).map(guest => ({
        name: guest.name,
        hasRsvpd: guest.events.find(event => event.name === 'Ceremony')?.hasRsvpd,
        numberOfGuests: guest.events.find(event => event.name === 'Ceremony')?.numberOfGuests
    }));
    const receptionInvites = guestRsvps.filter(guest => guest.events.some(event => event.name === 'Reception')).map(guest => ({
        name: guest.name,
        hasRsvpd: guest.events.find(event => event.name === 'Reception')?.hasRsvpd,
        numberOfGuests: guest.events.find(event => event.name === 'Reception')?.numberOfGuests
    }));

    const ceremonyRsvps = ceremonyInvites.filter(invite => invite.hasRsvpd === true);
    const receptionRsvps = receptionInvites.filter(invite => invite.hasRsvpd === true);

    console.log(ceremonyRsvps)

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('/api/admin');
            const data = await response.json();
            setGuestRsvps(data);
        }

        getData();
    }, [])

    return (
        <div className="w-screen h-screen min-h-screen flex flex-row justify-around overflow-hidden columns-2">
            <div>
                <h1 className='text-lg font-semibold mb-2'>Ceremony</h1>
                {ceremonyRsvps.map((rsvp, idx) => {
                    return (
                        <div key={idx} className="flex flex-row">
                            <div>{rsvp.name}</div>
                            <div className='ml-10'>{rsvp.numberOfGuests}</div>
                        </div>
                    )
                })}
            </div>
            <div>
                <h1 className='text-lg font-semibold mb-2'>Reception</h1>
                {receptionRsvps.map((rsvp, idx) => {
                    return (
                        <div key={idx} className="flex flex-row">
                            <div>{rsvp.name}</div>
                            <div className='ml-10'>{rsvp.numberOfGuests}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Admin