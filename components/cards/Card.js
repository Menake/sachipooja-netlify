import React, { useState } from 'react'

import { AnimateSharedLayout, motion } from "framer-motion"
// import CardPhoto from '@components/cards/CardPhoto';
import CollapsedCard from '@components/cards/CollapsedCard';
import ExpandedCard from '@components/cards/ExpandedCard';

const Card = ({ canRsvp, event, id, numberOfGuests, name }) => {
    const [isOpen, setIsOpen] = useState(false);

    const { blurb, name: eventName, imageSrc: src, date, location, imagePosition: objectPosition, guestEventId, hasRsvpd } = event;


    const collapsedProps = { src, eventName, objectPosition }
    const expandedProps = { blurb, canRsvp, date, eventName, guestEventId, hasRsvpd, id, location, name, numberOfGuests, objectPosition, src }

    const onFormSubmit = () => {
        setIsOpen(false);
        event.hasRsvpd = true
    }

    return (
        <AnimateSharedLayout type="crossfade">
            {
                isOpen
                    ? <ExpandedCard {...expandedProps} onClick={() => setIsOpen(false)} onFormSubmit={onFormSubmit} />
                    : <CollapsedCard {...collapsedProps} onClick={() => setIsOpen(true)} />
            }
        </AnimateSharedLayout>
    )
}

export default Card
