import PropTypes from "prop-types"
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
                <img {...item} className="filter grayscale grayscale-1 hover:grayscale-0 cursor-pointer"
                    onClick={() => setSelectedImage(item)} />
            </div>
        ))
    }

    return selectedImage ?
        (
            <div className="z-0">
                <img {...selectedImage} ></img>
                <div className="absolute bottom-0 inset-x-0 z-10">
                    <button className="m-auto cursor-pointer" onClick={() => setSelectedImage(null)}>Back</button>
                </div>
            </div>
        )
        : (
            <div className="flex flex-row justify-content-center items-stretch box-border w-full"
            >
                {getColumns().map((column, i) => (
                    <div key={i} className="flex-1 flex-col justify-content-start items-stretch"
                        style={{ marginLeft: i > 0 ? gutter : undefined }}>
                        {renderColumn(column)}
                    </div>
                ))}
            </div>
        )
}
