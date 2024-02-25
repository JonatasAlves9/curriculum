interface IProps {
    handleMouseEnter?: (event?: string) => void;
    handleMouseLeave?: (event?: string) => void;
    id?: string;
    label?: string;
    isOpenPopover?: boolean;
    Icon: any;
}

export const Icon = ({
                         handleMouseEnter = () => null,
                         handleMouseLeave = () => null,
                         id,
                         isOpenPopover,
                         label,
                         Icon
                     }: IProps) => {
    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={() => handleMouseLeave(id)}
        >
            <div className="bg-blue-400 p-4 rounded-full bg-opacity-10 text-blue-200 text-3xl">
                <Icon />
            </div>
            {isOpenPopover && (
                <div
                    className="text-sm absolute bg-gray-900 top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 shadow-lg rounded-md p-1 opacity-100"
                    style={{transition: 'opacity 0.3s ease, transform 0.3s ease'}}
                >
                    {label}
                </div>
            )}
        </div>
    )
}
