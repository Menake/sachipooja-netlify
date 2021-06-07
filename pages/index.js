import Hero from '@components/Hero'
import Nav from '@components/Nav'
import PhotoViewer from '@components/PhotoViewer'

export default function Home() {
    return (
        <div className="relative">
            <Hero className="relative z-0" />
            <PhotoViewer />
        </div>
    )
}
