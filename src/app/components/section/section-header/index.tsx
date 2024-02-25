export const Header = () => {
    return (
        <div className="p-8 border-b border-gray-700 relative">
            <div className="absolute h-7 w-7 rounded-full z-0 -ml-3 bottom-8" style={{
                backgroundColor: 'rgba(36,122,128,0.8)'
            }}/>
            <p className="z-10 relative text-xl">
                <span style={{
                    color: "#30c5ce"
                }}>S</span>obre mim
            </p>
        </div>
    )
}
