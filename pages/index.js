import { QA } from '@components/QA'
import Hero from '@components/Hero'
import PhotoViewer from '@components/PhotoViewer'

export default function Home() {
    return (
        <div className="relative overflow-hidden">
            <Hero className="relative z-0" />
            <PhotoViewer />
            <div className='h-10' />
            <div className="w-screen text-sm relative z-20 flex text-white flex-row space-between bg-primary content-center justify-center py-2 px-2">
                <div className="mr-36">Website by <a className="text-secondary" href="https://github.com/Menake">Menake Ratnayake</a></div>
                <div>Sketches by <a className="text-secondary" href="https://www.shutterstock.com/image-vector/street-corner-galle-sri-lanka-asia-405831994">babayuka</a></div>
            </div>
        </div>
    )
}
