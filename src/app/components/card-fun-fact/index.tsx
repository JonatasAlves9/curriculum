import {IconType} from "react-icons";

interface IProps {
    label: string;
    Icon: IconType;
}

export const CardFunFact = ({...props}: IProps) => {
    return (
        <div
            className={"p-4 border-gray-700 border w-1/4 relative border-t-0 border-l-0  justify-center items-center mx-auto content-center p-7 pt-[50px] pb-[50px]"}>
            <div className={"flex justify-center blue-500 "}>
                <props.Icon className={"text-3xl"}/>
            </div>
            <p className={"text-md mt-3 text-center"}>
                {props.label}
            </p>
        </div>
    )
}
