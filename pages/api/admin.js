import { db } from '../../firebase/admin'

export default async (req, res) => {
    try {
        if (!req.method === 'GET') res.status(400).end();

        const snapshot = await db.collection('guests').get();
        // find the guests
        const guests = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const events = (await db.collection('events').get()).docs.map(doc => ({ id: doc.id, ...doc.data() }));

        const guestRsvps = await Promise.all(guests.map(async guest => {
            const guestEventRsvps = (await db.collection('guests').doc(guest.id).collection('events').get()).docs
                .map(doc => ({ id: doc.id, ...doc.data() }));

            return {
                name: guest.name, events: guestEventRsvps.map(guestEvent => ({
                    id: guestEvent.eventId,
                    name: events.find(event => guestEvent.eventId === event.id)?.name,
                    numberOfGuests: guestEvent.attendingGuests,
                    hasRsvpd: guestEvent.hasRsvpd
                }))
            }
        }))

        res.status(200).json(guestRsvps);

    } catch (e) {
        console.log(e)
        res.status(500).end();
    }
}