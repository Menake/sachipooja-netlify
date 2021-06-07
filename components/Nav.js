import React from 'react'

import Link from 'next/link'
import useIsMobile from 'hooks/useIsMobile'

const Nav = ({ className }) => {
    const isMobile = useIsMobile();

    return (
        <div className={className}>
            {
                !isMobile && (
                    <div className='text-center font-bold text-primary cursor-pointer'>
                        <Link href='/gallery'>
                            Gallery
                        </Link>
                    </div>
                )
            }


        </div>
    )
}

export default Nav

