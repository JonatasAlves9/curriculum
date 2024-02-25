import {RiMenu2Line} from "react-icons/ri";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faFileAlt, faFolderOpen, faHandshake, faSun, faUser} from "@fortawesome/free-regular-svg-icons";
import React from "react";

export const Menu = () => {
    const itensMenu = [
        {
            id: 1,
            label: 'ABOUT',
            icon: faUser,
        },
        {
            id: 2,
            label: 'RESUME',
            icon: faFileAlt,
        },
        {
            id: 3,
            label: 'PROJECTS',
            icon: faHandshake,
        },
        {
            id: 4,
            label: 'ARTICLES',
            icon: faFolderOpen,
        },
        {
            id: 5,
            label: 'CONTACT',
            icon: faEnvelope,
        }
    ];
    return (
        <div
            className={"h-3/4 rounded-full transform rotate-y-3d -ml-5 z-40"}>
            <div
                className={"w-full p-4 border border-blue-400 h-full rounded-3xl absolute -left-3 top-3 z-0 transform -skew-y-3"}/>

            <div
                className={"bg-black border border-gray-600 bg-opacity-60 h-full rounded-full backdrop-blur-md z-0 grid w-fit "}>
                <div className={"flex justify-center items-center"}>
                    <a>
                        <RiMenu2Line className={"text-2xl"}/>
                    </a>
                </div>
                <div className={"gap-10 "}>
                    {
                        itensMenu.map((item) => (
                            <div key={item.id} className={"p-2 px-4 border-b border-gray-600"}>
                                <a>
                                    <div className={"flex justify-center mb-2"}>
                                        <FontAwesomeIcon icon={item.icon} width={15}/>
                                    </div>
                                    <div className={"flex justify-center"}>
                                        <p className={"text-xs"}>{item.label}</p>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <a className={"flex justify-center"}>
                    <FontAwesomeIcon icon={faSun} width={20}/>
                </a>
            </div>
        </div>
    )
}
