import { GoMarkGithub } from 'react-icons/go';
import { FaExternalLinkAlt } from 'react-icons/fa';

import AwesomeDrawsomeThumbUrl from '../assets/Screenshot 2022-03-29 114949.png';
import CanvasToNotionThumbUrl from '../assets/Screenshot 2022-03-29 175619.png';
import PortfolioThumbUrl from '../assets/Screenshot 2022-03-30 141620.png';

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
        title: "Portfolio V1",
        description: "Just a website to showcase myself and my work.",
        tags: ["React", "Tailwind", "Netlify"],
        projectUrl: "https://thefloatingtree.dev/",
        githubUrl: "https://github.com/thefloatingtree/portfolio-v1",
        thumbUrl: PortfolioThumbUrl
    },
    {
        title: "AwesomeDrawsome",
        description: "A drawing pad built for the web. Change your brush size, tip, and color. Undo and redo your strokes, use an eraser to erase your mistakes. Export your drawing to a png when you're finished.",
        tags: ["React", "Chakra UI", "PIXI.js", "Netlify"],
        projectUrl: "https://awesomedrawsome.netlify.app/",
        githubUrl: "https://github.com/CierraM/AwesomeDrawsome",
        thumbUrl: AwesomeDrawsomeThumbUrl
    },
    {
        title: "Canvas to Notion",
        description: "A small CLI utility to export assignments from Canvas and into Notion. Guides you through all the necessary steps to complete the export.",
        tags: ["Node.js, Notion API"],
        projectUrl: "https://github.com/thefloatingtree/canvas-to-notion",
        githubUrl: "https://github.com/thefloatingtree/canvas-to-notion",
        thumbUrl: CanvasToNotionThumbUrl
    },
    // {
    //     title: "",
    //     description: "",
    //     tags: [],
    //     projectUrl: "",
    //     githubUrl: "",
    //     thumbUrl: ""
    // },
]

export default function Projects() {
    return (
        <div id="projects" className="font-arvo-bold text-prussian-blue space-y-3">
            <h1 className="text-xl"># Projects</h1>
            <div className="space-y-16">
                {projectRecords.map(project => {
                    return (
                        <div className="space-y-3">
                            <a href={project.projectUrl}>
                                <h1 className="text-imperial-red text-xl">{project.title}</h1>
                            </a>
                            <p>{project.description}</p>
                            <div><a href={project.projectUrl}><img className="rounded-lg shadow" src={project.thumbUrl} alt="" /></a></div>
                            <div className="flex space-x-3">
                                {project.tags.map(tag => <div>{tag}</div>)}
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
