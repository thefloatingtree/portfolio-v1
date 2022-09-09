import { useEffect, useState } from "react"
import { useScrollYPosition } from "react-use-scroll-position"

import AnimationIdleUrl from '../assets/Unicorn.png'

export default function Animation() {

    const [currentSrc, setCurrentSrc] = useState(AnimationIdleUrl)
    const [imageOpacity, setImageOpacity] = useState(0)
    const scrollY = useScrollYPosition()

    const onImageLoad = () => {
        setImageOpacity(100)
    }

    useEffect(() => {
        // if (scrollY <= 600) {
        //     setCurrentSrc("https://media2.giphy.com/media/26BRyql7J3iOx875u/200.gif")
        // } else if (scrollY > 600 && scrollY <= 1150) {
        //     setCurrentSrc("https://onlinepngtools.com/images/examples-onlinepngtools/sunset.gif")
        // } else if (scrollY > 1150) {
        //     setCurrentSrc("https://media2.giphy.com/media/26BRyql7J3iOx875u/200.gif")
        // }
    }, [scrollY])

    return (
        <div className="min-w-96 pt-16">
            <img onLoad={onImageLoad} className={`h-96 transition-all opacity-${imageOpacity}`} src={currentSrc} alt="" />
        </div>
    )
}
