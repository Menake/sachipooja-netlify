const CardPhoto = ({ src, heading, className, onClick }) => {
    return (
        <div className={`mx-10 mt-5 flex flex-row relative justify-center items-center rounded shadow-md -top-10 cursor-pointer ${className}`} onClick={onClick}>
            <img className="relative z-0 h-full object-cover" src={src} />
            <div
                className="z-20 absolute w-full h-full bg-black opacity-30 mx-10 p-2">
            </div>
            <h1 className="m-auto absolute z-30 text-4xl font-bold text-white">{heading}</h1>
        </div>
    )
}

export default CardPhoto