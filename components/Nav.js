import React from 'react'

import Link from 'next/link'
import useIsMobile from 'hooks/useIsMobile'

const Nav = () => {
    const isMobile = useIsMobile();

    return (
        <div className="inset-y-0 left-0 w-10">
            <div className='text-center font-bold text-primary cursor-pointer'>
                <Link href='/' className="cursor-pointer" >
                    Home
                </Link>
            </div>
            {
                !isMobile && (
                    <div className='text-center font-bold text-primary mr-20'>
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

