'use client'

import {Section} from "@/app/components/section";
import {useState} from "react";

import {FaAppStore, FaDatabase, FaGithub, FaJsSquare, FaNodeJs, FaReact} from 'react-icons/fa';
import {SiCsharp, SiDotnet, SiKubernetes, SiTypescript} from 'react-icons/si';
import {AiFillAmazonCircle} from 'react-icons/ai';
import {CardIcon} from "@/app/components/card-icon";
import {CardTestimonials} from "@/app/components/card-testimonials";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"

export default function Page() {
    const [popoverState, setPopoverState] = useState<{ [key: number]: boolean }>({});

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
        {
            id: 10,
            label: 'Kubernetes',
            Icon: SiKubernetes,
        },
    ];

    const data = [
        {
            title: "App Developement",
            description: "End-to-end organization, ui/ux design, optimization, and maintenance of your mobile app project.",
            Icon: FaAppStore // Substitua IconType1 pelo tipo de ícone que você está usando
        },
        {
            title: "Data Scientist\n",
            description: "Great marketing campaigns, improve customer service, better business decisions and effective strategies.",
            Icon: SiKubernetes // Substitua IconType2 pelo tipo de ícone que você está usando
        },
        {
            title: "App Prototyping",
            description: "We build a prototype of application concept in record time to validate assumptions, figure what works.",
            Icon: SiKubernetes // Substitua IconType3 pelo tipo de ícone que você está usando
        },
        {
            title: "Project Management",
            description: "Planning, organizing and managing project activities required to complete an individual project.",
            Icon: SiKubernetes // Substitua IconType4 pelo tipo de ícone que você está usando
        }
    ];

    return (
        <>
            <Section.Header title={"Sobre mim"}/>
            <Section.Body>
                <div className={"grid xl:flex justify-between gap-3"}>
                    <div className={"p-6 w-full "}>
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
                            <div className="flex flex-wrap gap-2 w-2/4 justify-end">
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
            <Section.Body>
                <div className={"grid grid-cols-2"}>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`p-4 ${
                                index === data.length - 1 ? 'border-gray-700 border-b' : 'border border-gray-700 border-t-0 border-l border-r-0 '
                            } ${
                                index === 1 || index === 3 ? 'border-r-0 border-l' : ''
                            } ${
                                index === 2 || index === 3 ? 'border-t-0' : ''
                            }`}
                        >
                            <CardIcon Icon={item.Icon} title={item.title} description={item.description}/>
                        </div>
                    ))}
                </div>
            </Section.Body>
            <Section.Header title={"Testimonials"}/>
            <Section.Body>
                {/*<div className={"flex gap-3 p-3 overflow-x-auto w-screen xl:w-full"} style={{ userSelect: 'none', cursor: 'grab' }}>*/}
                {/*    <CardTestimonials*/}
                {/*        person={{*/}
                {/*            name: 'Jônatas Alves',*/}
                {/*            description: 'Arquiteto de software',*/}
                {/*            avatar: 'https://github.com/JonatasAlves9.png'*/}
                {/*        }}*/}
                {/*        testimonial={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod enim vel augue accumsan, sit amet facilisis ligula condimentum."}/>*/}

                {/*    <CardTestimonials*/}
                {/*        person={{*/}
                {/*            name: 'Jônatas Alves',*/}
                {/*            description: 'Arquiteto de software',*/}
                {/*            avatar: 'https://github.com/JonatasAlves9.png'*/}
                {/*        }}*/}
                {/*        testimonial={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod enim vel augue accumsan, sit amet facilisis ligula condimentum."}*/}
                {/*    />*/}
                {/*    <CardTestimonials*/}
                {/*        person={{*/}
                {/*            name: 'Jônatas Alves',*/}
                {/*            description: 'Arquiteto de software',*/}
                {/*            avatar: 'https://github.com/JonatasAlves9.png'*/}
                {/*        }}*/}
                {/*        testimonial={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod enim vel augue accumsan, sit amet facilisis ligula condimentum."}*/}
                {/*    />*/}
                {/*</div>*/}
                <Carousel className={"lg:p-5"}>
                    <CarouselContent>
                        <CarouselItem className={"lg:basis-1/2"}>
                            <CardTestimonials
                                person={{
                                    name: 'Jônatas Alves',
                                    description: 'Arquiteto de software',
                                    avatar: 'https://github.com/JonatasAlves9.png'
                                }}
                                testimonial={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod enim vel augue accumsan, sit amet facilisis ligula condimentum."}
                            />
                        </CarouselItem>
                        <CarouselItem  className={"lg:basis-1/2"}> <CardTestimonials
                            person={{
                                name: 'Jônatas Alves',
                                description: 'Arquiteto de software',
                                avatar: 'https://github.com/JonatasAlves9.png'
                            }}
                            testimonial={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod enim vel augue accumsan, sit amet facilisis ligula condimentum."}
                        /></CarouselItem>
                        <CarouselItem  className={"lg:basis-1/2"}>
                            <CardTestimonials
                                person={{
                                    name: 'Jônatas Alves',
                                    description: 'Arquiteto de software',
                                    avatar: 'https://github.com/JonatasAlves9.png'
                                }}
                                testimonial={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod enim vel augue accumsan, sit amet facilisis ligula condimentum."}
                            /></CarouselItem>
                    </CarouselContent>
                    {/*<CarouselPrevious/>*/}
                    {/*<CarouselNext/>*/}
                </Carousel>
            </Section.Body>
            <Section.Header title={"Testimonials"}/>
        </>
    )
}
