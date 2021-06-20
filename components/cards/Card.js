import React, { useState } from 'react'

import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
// import CardPhoto from '@components/cards/CardPhoto';
import CollapsedCard from '@components/cards/CollapsedCard';
import ExpandedCard from '@components/cards/ExpandedCard';

const Card = ({ canRsvp, event, src, date, blurb, location, numberOfGuests, name, objectPosition }) => {
    const [isOpen, setIsOpen] = useState(false);

    const collapsedProps = { src, event, objectPosition }
    const expandedProps = { blurb, canRsvp, date, event, location, name, numberOfGuests, objectPosition, src }

    return (
        <AnimateSharedLayout type="crossfade">
            {
                isOpen
                    ? <ExpandedCard {...expandedProps} onClick={() => setIsOpen(false)} />
                    : <CollapsedCard {...collapsedProps} onClick={() => setIsOpen(true)} />
            }
        </AnimateSharedLayout>
    )
}

export default Card
