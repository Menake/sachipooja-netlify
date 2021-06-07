import Link from "next/link";
import React, { useState } from "react"

export default function Masonry({ gutter = 0, columnsCount = 3, images }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const getColumns = () => {
        const columns = Array.from({ length: columnsCount }, () => [])

        images.forEach((image, index) => {
            columns[index % columnsCount].push(image)
        })

        return columns
    }

    const renderColumn = (column) => {
        return column.map((item, i) => (
            <div key={i} style={{ marginTop: i > 0 ? gutter : undefined }}>
                <img {...item} className="filter grayscale-85 hover:grayscale-0 cursor-pointer"
                    onClick={() => setSelectedImage(item)} />
            </div>
        ))
    }

    return selectedImage ?
        (
            <div className="relative h-screen bg-black flex flex-row justify-center">
                <div>
                    <img {...selectedImage} className="h-full z-0"></img>
                    <div>{selectedImage.caption}</div>
                </div>
                <div className="fixed bottom-5 rounded-full h-10 w-10 shadow-2xl drop-shadow-2xl cursor-pointer flex items-center justify-center bg-white rounded-full">
                    <div onClick={() => setSelectedImage(null)}>
                        X
                    </div>
                </div>
            </div>
        )
        : (
            <div className="flex flex-row justify-center items-stretch box-border w-full"
            >
                {getColumns().map((column, i) => (
                    <div key={i} className="flex-1 flex-col justify-start items-stretch"
                        style={{ marginLeft: i > 0 ? gutter : undefined }}>
                        {renderColumn(column)}
                    </div>
                ))}
                <div className="fixed bottom-5 rounded-full h-10 w-10 shadow-2xl drop-shadow-2xl cursor-pointer flex items-center justify-center bg-white rounded-full">
                    <Link href='/'>X</Link>
                </div>
            </div>
        )
}
