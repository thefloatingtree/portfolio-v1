import { Point } from "./Point";

export default function About() {
    return (
        <div id="about" className="font-arvo-bold text-prussian-blue space-y-3">
            <h1 className="text-xl"># About Me</h1>
            <p className="text-md">Hello! My name is Jacob and I love creating things that live in the browser. My interest in web developement started in university during a web development class where we learned how to use php and heroku to build and host websites. The ability to create just about anything and share it quickly had me hooked and I haven't stopped building things since. I almost always have a couple personal projects in the works, ask me about them!</p>
            <p className="text-md">I've had amazing opportunities to work at some incredible companies that are building experiences that are important to thousands of people. Every company I've worked for has taught me a lot about web development and design. Family Search taught me about accessibility and inclusivity, Pitch59 taught me about design tools and methods, and BYU-Idaho taught me about working in teams.</p>
            <p>Here's a few technologies I've been working with recently:</p>
            <ul className="space-y-1">
                <Point point="TypeScript"></Point>
                <Point point="React"></Point>
                <Point point="Svelte"></Point>
                <Point point="Tailwindcss"></Point>
                <Point point="WebSockets"></Point>
                <Point point="Node.js"></Point>
            </ul>
            <p className="text-md">More personally, I'm an avid enjoyer of art and animation. I love the show Bluey, which, if you know, you know. I also enjoy making my own art from time to time and love to share it with people online.</p>
        </div>
    )
}
