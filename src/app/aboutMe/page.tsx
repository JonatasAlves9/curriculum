'use client'

import {Section} from "@/app/components/section";
import {useState} from "react";

import { FaReact, FaAws, FaNodeJs, FaGithub, FaDatabase, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiCsharp } from 'react-icons/si';
import { AiFillAmazonCircle } from 'react-icons/ai';
export default function Page() {
    const [popoverState, setPopoverState] = useState({});

    const handleMouseEnter = (id: number) => {
        setPopoverState((prevState) => ({
            ...prevState,
            [id]: true,
        }));
    };

    const handleMouseLeave = (id: number) => {
        setPopoverState((prevState) => ({
            ...prevState,
            [id]: false,
        }));
    };

    const skills = [
        {
            id: 1,
            label: 'ReactJS',
            Icon: FaReact,
        },
        {
            id: 2,
            label: 'Typescript',
            Icon: SiTypescript,
        },
        {
            id: 3,
            label: 'AWS',
            Icon: AiFillAmazonCircle,
        },
        {
            id: 4,
            label: 'Node.js',
            Icon: FaNodeJs,
        },
        {
            id: 5,
            label: 'C#',
            Icon: SiCsharp,
        },
        {
            id: 6,
            label: '.NET',
            Icon: SiDotnet,
        },
        {
            id: 7,
            label: 'GitHub',
            Icon: FaGithub,
        },
        {
            id: 8,
            label: 'SQL',
            Icon: FaDatabase,
        },
        {
            id: 9,
            label: 'JavaScript',
            Icon: FaJsSquare,
        },
    ];

    return (
        <>
            <Section.Header title={"Sobre mim"}/>
            <Section.Body>
                <div className={"flex justify-between gap-3"}>
                    <div className={"p-6 w-full"}>
                        <p className={"text-gray-400 font-normal text-pretty"}>Hey, there 👋🏻 hi Im Benjamin, a Software
                            developer and Data scientist with over 8+ years of
                            experience, specialising in Java and React. Also I proficient at using tools and programming
                            languages such as Python or SQL to manipulate and analyze data.</p>
                    </div>
                    <div className={"border border-gray-700 border-t-0 w-full"}>
                        <div className={"flex w-full justify-between p-6 pt-8 border-b  border-gray-700"}>
                            <div className={"bg-blue-400 p-1 rounded px-2 text-gray-800 text-xs"}>
                                Location:
                            </div>
                            <div>
                                <p>
                                    Pernambuco, Brasil
                                </p>
                            </div>
                        </div>

                        <div className={"flex w-full justify-between p-6 pt-8 border-b  border-gray-700"}>
                            <div className={"bg-blue-400 p-1 rounded px-2 text-gray-800 text-xs"}>
                                Languages:
                            </div>
                            <div>
                                <p>
                                    English, Português
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full justify-between p-6">
                            <div className="bg-blue-400 p-1 rounded px-2 text-gray-800 text-xs h-fit">
                                Skills:
                            </div>
                            <div className="flex flex-wrap gap-2 w-2/4">
                                {skills.map((item) => (
                                    <div
                                        key={item.id}
                                        className="relative flex items-center"
                                        onMouseEnter={() => handleMouseEnter(item.id)}
                                        onMouseLeave={() => handleMouseLeave(item.id)}
                                    >
                                        <div className="bg-blue-400 p-2 rounded bg-opacity-30 text-blue-200">
                                            <item.Icon/>
                                        </div>
                                        {popoverState[item.id] && (
                                            <div
                                                className="text-sm absolute bg-gray-900 top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 shadow-lg rounded-md p-1 opacity-100"
                                                style={{transition: 'opacity 0.3s ease, transform 0.3s ease'}}
                                            >
                                                {item.label}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </Section.Body>
            <Section.Header title={"Meus serviços"}/>
        </>
    )
}
