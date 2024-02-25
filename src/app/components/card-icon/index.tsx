import {Icon} from "@/app/components/icon";
import {IconType} from "react-icons";

interface IProps {
    title: string;
    description: string;
    Icon: IconType;
}
export const CardIcon = ({...props}:IProps) => {
    return (
        <div className={"p-4 border-gray-700 border rounded-3xl bg-white bg-opacity-5"}>
            <Icon Icon={props.Icon} />
            <p className={"text-md font-bold text-gray-400 mt-3"}>
                {props.title}
            </p>
            <p className={"text-sm text-gray-400 mt-1"}>
                {props.description}
            </p>
        </div>
    )
}
