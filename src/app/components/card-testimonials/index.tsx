import {Icon} from "@/app/components/icon";
import {IconType} from "react-icons";

interface IProps {
    person: {
        name: string;
        description: string;
        avatar: string;
    };
    testimonial: string;
}

export const CardTestimonials = ({...props}: IProps) => {
    return (
        <div className={"p-4 border-gray-700 border rounded-3xl bg-white bg-opacity-5 min-w-[400px] max-w-[400px] relative mt-5"}>
            <img className={"rounded-full absolute w-[60px] h-[60px] -top-5 right-5"} src={props.person.avatar}/>

            <div>
                <div>
                    <p className={"text-md font-bold text-gray-400 mt-1"}>
                        {props.person.name}
                    </p>
                    <p className={"text-sm text-gray-400 mt-1"}>
                        {props.person.description}
                    </p>
                </div>

            </div>

            <p className={"text-sm text-gray-400 mt-3"}>
                {props.testimonial}
            </p>
        </div>
    )
}
