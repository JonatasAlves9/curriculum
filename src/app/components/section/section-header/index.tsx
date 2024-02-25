
interface IProps {
    title: string
}
export const Header = ({title}: IProps) => {
    return (
        <div className="p-8 border-b border-gray-700 relative">
            <div className="absolute h-7 w-7 rounded-full z-0 -ml-3 bottom-8" style={{
                backgroundColor: 'rgba(36,122,128,0.8)'
            }}/>
            <p className="z-10 relative text-xl">
                <span style={{
                    color: "#30c5ce"
                }}>{title.substring(0, 1)}</span>{title.substring(1, title.length)}
            </p>
        </div>
    )
}
