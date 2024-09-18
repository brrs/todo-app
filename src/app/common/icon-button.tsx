interface IconButtonProps {
    /**
     * path to svg file
     */
    icon: string,
    onClick: () => void
    className?: string
}

export function IconButton({ icon, onClick, className }: IconButtonProps) {
    return (
        <div
            className={`rounded-md h-full aspect-square bg-secondary p-2.5 
             transition-opacity duration-300 hover:opacity-70 ${className}`}
            onClick={onClick}
        >
            <img
                className="w-full h-full"
                src={icon} alt=""
            />
        </div>
    )
}