import {CiLinkedin} from "react-icons/ci";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";

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
            className={"bg-image-card bg-cover bg-center h-full w-96 rounded-3xl rotate-y-3d card-image -ml-8 flex items-end"}>

            {/*Bottom content*/}
            <div className={"w-full h-1/3 backdrop-blur-md"}>
                <div className={"text-center p-3"}>
                    <h1 className={"text-3xl font-bold"}>Jônatas Alves</h1>
                    <h1 className={"text-md text-blue-600 font-medium"}>Arquiteto de Software</h1>
                    <FaLinkedin width={20} height={20}/>

                    <div className={"justify-center flex gap-3 mt-2"}>
                        {
                            medias.map((item) => (
                                <div key={item.id} >
                                        <item.Icon className={"text-2xl hover:text-blue-500 hover:cursor-pointer"}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
