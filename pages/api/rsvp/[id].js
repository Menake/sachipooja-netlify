import { db } from '../../../firebase/admin'

export default async (req, res) => {
    try {
        if (!req.method === 'PUT') res.status(400).end()

        const { id } = req.query;

        const { attendingGuests, guestEventId } = JSON.parse(req.body)

        const rsvpObject = {
            hasRsvpd: true,
            attendingGuests
        }

        await db.collection('guests').doc(id).collection('events').doc(guestEventId).update(rsvpObject);
        return res.status(200).end();

    } catch (e) {
        console.log(e)
        res.status(500).end();
    }
}