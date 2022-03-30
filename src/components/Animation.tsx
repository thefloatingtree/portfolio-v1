import { useEffect, useState } from "react"
import { useScrollYPosition } from "react-use-scroll-position"


export default function Animation() {

    const [currentSrc, setCurrentSrc] = useState("./src/assets/Unicorn.png")
    const scrollY = useScrollYPosition()

    useEffect(() => {
        // if (scrollY <= 600) {
        //     setCurrentSrc("https://media2.giphy.com/media/26BRyql7J3iOx875u/200.gif")
        // } else if (scrollY > 600 && scrollY <= 1150) {
        //     setCurrentSrc("https://onlinepngtools.com/images/examples-onlinepngtools/sunset.gif")
        // } else if (scrollY > 1150) {
        //     setCurrentSrc("https://media2.giphy.com/media/26BRyql7J3iOx875u/200.gif")
        // }
        console.log(scrollY)
    }, [scrollY])

    return (
        <div className="min-w-96 pt-16">
            <img className="h-96" src={currentSrc} alt="" />
        </div>
    )
}
