import About from "./components/About"
import Animation from "./components/Animation"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Intro from "./components/Intro"
import Projects from "./components/Projects"

function App() {

    return (
        <div className="min-h-screen bg-antique-white">
            <div className="container mx-auto px-8 md:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="space-y-64 lg:col-span-3">
                        <Intro></Intro>
                        <About></About>
                        <Experience></Experience>
                        <Projects></Projects>
                        <Contact></Contact>
                    </div>
                    <div className="self-start sticky top-0 col-span-2 h-screen hidden lg:inline">
                        <div className="flex w-full h-full justify-center items-center">
                            <Animation></Animation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
