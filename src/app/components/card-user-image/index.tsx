import {CiLinkedin} from "react-icons/ci";
import {FaXTwitter, FaGithub} from "react-icons/fa6";
import {IoCloudDownloadOutline, IoCallOutline} from "react-icons/io5";

import {FaLinkedin} from "react-icons/fa";

export const CardUserImage = () => {

    const medias = [
        {
            id: 1,
            name: 'Linkedin',
            url: '',
            Icon: CiLinkedin,
        },
        {
            id: 2,
            name: 'X',
            url: '',
            Icon: FaXTwitter,
        },
        {
            id: 3,
            name: 'Github',
            url: '',
            Icon: FaGithub,
        }
    ]
    return (
        <div
            className={"bg-image-card bg-cover bg-center rounded-3xl rotate-y-3d w-full sm:-ml-8 flex items-end "} style={{
                height: 750
        }}>

            {/*Bottom content*/}
            <div className={"w-full h-1/3 backdrop-blur-md grid rounded-b-3xl"}
                 style={{background: 'linear-gradient(transparent,rgba(0, 0, 0, 0.6))'}}>
                <div className={"text-center p-3 mt-3"}>
                    <h1 className={"text-3xl font-bold"}>Jônatas Alves</h1>
                    <h1 className={"text-md text-blue-600 font-medium"}>Arquiteto de Software</h1>

                    <div className={"justify-center flex gap-3 mt-4"}>
                        {
                            medias.map((item) => (
                                <a key={item.id}>
                                    <item.Icon className={"text-2xl hover:text-blue-500"}/>
                                </a>
                            ))
                        }
                    </div>

                </div>
                <div className={"flex w-full justify-between border-t  border-gray-600"}>
                    <button
                        className="flex items-center justify-center w-full gap-3 text-sm group transition-all duration-300">
                        DOWNLOAD CV
                        <span
                            className="text-white group-hover:text-blue-500 group-hover:-mt-2 transition-all duration-300"><IoCloudDownloadOutline
                            className={"text-xl"}/></span>
                    </button>
                    <button
                        className="flex items-center justify-center w-full border-l border-gray-600 gap-3 text-sm group transition-all duration-300">
                        CONTATO
                        <span
                            className="text-white group-hover:text-blue-500 group-hover:-mt-2 transition-all duration-300"><IoCallOutline
                            className={"text-xl"}/></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
