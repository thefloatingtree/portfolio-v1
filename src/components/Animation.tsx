import { useEffect, useState } from "react"
import { useScrollYPosition } from "react-use-scroll-position"


export default function Animation() {

    const [currentSrc, setCurrentSrc] = useState("")
    const scrollY = useScrollYPosition()

    useEffect(() => {
        if (scrollY <= 500) {
            setCurrentSrc("https://media2.giphy.com/media/26BRyql7J3iOx875u/200.gif")
        } else if (scrollY > 500) {
            setCurrentSrc("https://onlinepngtools.com/images/examples-onlinepngtools/sunset.gif")
        }
    }, [scrollY])

    return (
        <div>
            <img className="w-64 h-64" src={currentSrc} alt="" />
        </div>
    )
}
