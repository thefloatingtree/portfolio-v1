import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
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
                    <div className="lg:col-span-3">
                        <div className="h-32 space-x-8 items-center hidden lg:flex">
                            <a className="hover:text-imperial-red text-prussian-blue text-lg transition-all" href="#about">About</a>
                            <a className="hover:text-imperial-red text-prussian-blue text-lg transition-all" href="#experience">Experience</a>
                            <a className="hover:text-imperial-red text-prussian-blue text-lg transition-all" href="#projects">Projects</a>
                            <a className="hover:text-imperial-red text-prussian-blue text-lg transition-all" href="#contact">Contact</a>
                        </div>
                        <div className="py-16 lg:pb-96 lg:pt-28 space-y-32 lg:space-y-96 ">
                            <Intro></Intro>
                            <About></About>
                            <Experience></Experience>
                            <Projects></Projects>
                            <Contact></Contact>
                            <div className="flex justify-center lg:hidden">
                                <div className="space-y-3 ">
                                    <Animation></Animation>
                                    <div className="flex space-x-3 ">
                                        <a target="_blank" href="https://twitter.com/thefloatingtree" className="hover:text-imperial-red text-prussian-blue transition-all">
                                            <FaTwitter size={24}></FaTwitter>
                                        </a>
                                        <a target="_blank" href="https://github.com/thefloatingtree" className="hover:text-imperial-red text-prussian-blue transition-all">
                                            <FaGithub size={24}></FaGithub>
                                        </a>
                                        <a target="_blank" href="https://www.linkedin.com/in/jacob--perry/" className="hover:text-imperial-red text-prussian-blue transition-all">
                                            <FaLinkedin size={24}></FaLinkedin>
                                        </a>
                                    </div>
                                    <p className="text-prussian-blue">thefloatingtree@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-start sticky top-0 col-span-2 h-screen hidden lg:inline">
                        <div className="flex w-full h-full justify-center items-center">
                            <div className="space-y-3">
                                <Animation></Animation>
                                <div className="flex space-x-3">
                                    <a target="_blank" href="https://twitter.com/thefloatingtree" className="hover:text-imperial-red transition-all">
                                        <FaTwitter size={24}></FaTwitter>
                                    </a>
                                    <a target="_blank" href="https://github.com/thefloatingtree" className="hover:text-imperial-red transition-all">
                                        <FaGithub size={24}></FaGithub>
                                    </a>
                                    <a target="_blank" href="https://www.linkedin.com/in/jacob--perry/" className="hover:text-imperial-red transition-all">
                                        <FaLinkedin size={24}></FaLinkedin>
                                    </a>
                                </div>
                                <p>thefloatingtree@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
