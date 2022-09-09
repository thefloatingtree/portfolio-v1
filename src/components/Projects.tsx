import { GoMarkGithub } from 'react-icons/go';
import { FaExternalLinkAlt } from 'react-icons/fa';

import MultiplayerDrawingAppThumbUrl from '../assets/MDA_Screenshot.png';
import CanvasToNotionThumbUrl from '../assets/Screenshot 2022-03-29 175619.png';
import PortfolioThumbUrl from '../assets/Screenshot 2022-03-30 141620.png';
import TrengineThumbUrl from '../assets/Screenshot 2022-03-30 181826.png';
import NoteAppThumbUrl from '../assets/Screenshot 2022-09-09 113831.png';
import DrawThisThumbUrl from '../assets/Screenshot 2022-09-09 114059.png';

interface ProjectRecord {
    title: string
    description: string
    tags: Array<string>
    projectUrl: string
    githubUrl: string,
    thumbUrl: string
}

const projectRecords: Array<ProjectRecord> = [
    {
        title: "Multiplayer Drawing App",
        description: "A website I built for my senior project that allows one or more people to draw on a shared canvas in their browser. Implements all of the standard navigation and drawing tools.",
        tags: ["TypeScript", "Svelte", "Tailwindcss", "PIXI.js", "WebSockets"],
        projectUrl: "http://multiplayer-drawing-app.herokuapp.com/",
        githubUrl: "https://github.com/thefloatingtree/Multiplayer-Drawing-App",
        thumbUrl: MultiplayerDrawingAppThumbUrl
    },
    {
        title: "Portfolio V1",
        description: "A website to showcase myself and my work.",
        tags: ["TypeScript", "React", "Tailwind", "Netlify"],
        projectUrl: "https://thefloatingtree.dev/",
        githubUrl: "https://github.com/thefloatingtree/portfolio-v1",
        thumbUrl: PortfolioThumbUrl
    },
    {
        title: "Canvas to Notion",
        description: "A small utility to export assignments from Canvas and into Notion. Guides you through all the necessary steps to complete the export.",
        tags: ["Node.js", "Notion API"],
        projectUrl: "https://github.com/thefloatingtree/canvas-to-notion",
        githubUrl: "https://github.com/thefloatingtree/canvas-to-notion",
        thumbUrl: CanvasToNotionThumbUrl
    },
    {
        title: "Trengine",
        description: "A home-grown JavaScript game engine. Implements an ECS architecture and runs in an Electron environment. Supports rendering 3D and 2D scenes, sound, input, asset loading, animations, and physics.",
        tags: ["Electron", "Three.js", "Vue.js"],
        projectUrl: "https://github.com/thefloatingtree/Trengine-2",
        githubUrl: "https://github.com/thefloatingtree/Trengine-2",
        thumbUrl: TrengineThumbUrl
    },
    {
        title: "Draw This",
        description: "A web game that is played amongst friends. Each round of the game consists of a single describer describing an image taken from the Met Museum's API and all the rest of the players making a drawing based on that description. At the end of each round, the best drawing is voted on and the player with the most points at the end of the game wins.",
        tags: ["Express.js", "React", "WebSockets"],
        projectUrl: "https://drawthis.herokuapp.com/",
        githubUrl: "https://github.com/per18020/draw-this",
        thumbUrl: DrawThisThumbUrl
    },
    {
        title: "Note Taking App",
        description: "A web app written for a class project that enables users to create notes on the web. Implements a full WYSIWYG editor with Markdown support for quickly formatting notes. Notes can be named, searched, and sorted into collections.",
        tags: ["PHP", "Bulma", "Postgres", "Heroku"],
        projectUrl: "https://thawing-inlet-31036.herokuapp.com/project01/login.php",
        githubUrl: "https://github.com/per18020/cs313-php",
        thumbUrl: NoteAppThumbUrl
    },
]

export default function Projects() {
    return (
        <div id="projects" className="font-arvo-bold text-prussian-blue space-y-3">
            <h1 className="text-xl"># Projects</h1>
            <div className="space-y-16">
                {projectRecords.map((project, index) => {
                    return (
                        <div key={index} className="space-y-3">
                            <a href={project.projectUrl}>
                                <h1 className="text-imperial-red text-xl">{project.title}</h1>
                            </a>
                            <p>{project.description}</p>
                            <div><a href={project.projectUrl}><img className="rounded-lg shadow" src={project.thumbUrl} alt="" /></a></div>
                            <div className="flex space-x-3">
                                {project.tags.map((tag, index) => <div key={index}>{tag}</div>)}
                            </div>
                            <div className="flex space-x-3">
                                <a target="_blank" href={project.githubUrl}>
                                    <GoMarkGithub className="hover:text-imperial-red transition-all" size={24} />
                                </a>
                                <a target="_blank" href={project.projectUrl}>
                                    <FaExternalLinkAlt className="hover:text-imperial-red transition-all" size={24} />
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
