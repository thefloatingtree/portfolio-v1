import { useState } from "react";
import Button from "./Button";

interface ExperienceRecord {
    company: string
    position: string
    time: string
    points: Array<string>
}

const experienceRecords: Array<ExperienceRecord> = [
    {
        company: "Family Search",
        position: "Frontend Intern",
        time: "July - September 2021",
        points: [
            "Developed features and fixed bugs in a React.js codebase. Worked in an older legacy codebase",
            "Referenced Figma designs to guide the development of new features. Built a new site-wide footer based on designs made in Figma",
            "Communicated remotely and regularly within a small 6-person team in an Agile development environment"
        ]
    },
    {
        company: "Pitch59",
        position: "QA/UX/UI Intern",
        time: "April - July 2021",
        points: [
            "Devised and developed CI/CD solutions and automated testing suites in Python. Collaborated with and led a team of students at BYU-Idaho creating tests",
            "Designed new features with Figma, cleaned up existing designs in Figma. Contributed to the final design of the front page of the company website",
            "Implemented new ways to use team management software to increase the productivity of team. Moved team over to software by the end of internship"
        ]
    },
    {
        company: "Brigham Young University - Idaho",
        position: "Student Software Engineer",
        time: "March 2019 - April 2021",
        points: [
            "Built software solutions for students and faculty with a .NET and Angular tech stack",
            "Designed and constructed the front and back end of an internal website to improve data transfer between the University Store and a third-party",
            "Troubleshooted critical hardware and software with minimal downtime"
        ]
    },
]


function Point({ point }: any) {
    return <li className="flex space-x-3">
        <div className="w-4">
            <div className="bg-imperial-red w-2 h-2 rounded-full mt-2"></div>
        </div>
        <p>{point}</p>
    </li>
}


export default function Experience() {

    const [selectedCompany, setSelectedCompany] = useState(experienceRecords[0])

    return (
        <div className="font-arvo-bold text-prussian-blue space-y-4">
            <h1 className="text-xl">Experience</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    { experienceRecords.map(record => <Button color={record.company == selectedCompany.company ? 'red' : 'ghost'} onClick={() => setSelectedCompany(record)} >{record.company}</Button> ) }
                </div>
                <div className="col-span-2">
                    <h1>{selectedCompany.position} at {selectedCompany.company}</h1>
                    <h1>{selectedCompany.time}</h1>
                    <ul className="space-y-1">
                        { selectedCompany.points.map(point => <Point point={point}></Point>) }
                    </ul>
                </div>
            </div>
        </div>
    )
}
