import Hero from '@components/Hero'
import PhotoViewer from '@components/PhotoViewer'

export default function Home() {
    return (
        <div className="relative overflow-hidden">
            <Hero className="relative z-0" />
            <PhotoViewer />
        </div>
    )
}
