import React from 'react'

import Masonry from '@components/Masonry'

const Gallery = ({ images }) => {
    return (
        <div className="bg-black">
            <Masonry columnsCount={3} gutter={2} images={images} />
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            images: [
                {
                    src: "/gallery/1.jpg",
                },
                {
                    src: "/gallery/2.jpg"
                },
                {
                    src: "/gallery/3.jpg"
                },
                {
                    src: "/gallery/4.jpg"
                },
                {
                    src: "/gallery/5.jpg"
                },
                {
                    src: "/gallery/6.jpg"
                },
                {
                    src: "/gallery/8.jpg"
                },
                {
                    src: "/gallery/7.jpg"
                },
                {
                    src: "/gallery/9.jpg"
                },
                {
                    src: "/gallery/11.jpg"
                },
                {
                    src: "/gallery/10.jpg"
                },
                {
                    src: "/gallery/12.jpg"
                },
                {
                    src: "/gallery/13.jpg"
                },
                {
                    src: "/gallery/14.jpg"
                },
                {
                    src: "/gallery/15.jpg"
                },
                {
                    src: "/gallery/16.jpg"
                },
                {
                    src: "/gallery/18.jpg"
                },
                {
                    src: "/gallery/19.jpg"
                },
                {
                    src: "/gallery/20.jpg"
                },
                {
                    src: ''
                },
                {
                    src: '',
                },
                {
                    src: "/gallery/21.jpeg"
                }
            ]
        }
    }
}

export default Gallery