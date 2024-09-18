import { IconButton } from "./common/icon-button"

interface HeaderProps {

}

export default function Header({ }: HeaderProps) {
    return (
        <header className="w-full bg-tertiary py-4 px-12">
            <div className=" flex justify-between items-center w-full h-9">

                <div className="flex text-2xl font-bold">
                    <span className="text-secondary">Dash</span>
                    <span className="text-onTertiary">board</span>
                </div>

                <SearchBar></SearchBar>

                <div className="h-full flex space-x-12">
                    <div className="h-full flex space-x-4">
                        <IconButton
                            icon="icons/bell.svg"
                            onClick={() => { }}
                        />
                        <IconButton
                            icon="icons/calendar.svg"
                            onClick={() => { }}
                        />
                    </div>

                    <div className="h-full flex flex-col items-start justify-center text-sm">
                        <span className="text-onTertiary">Tuesday</span>
                        <span className="text-date">20/20/2020</span>
                    </div>
                </div>
            </div>

        </header>
    )
}

interface SearchBarProps {

}

function SearchBar({ }: SearchBarProps) {
    return (
        <div className="relative h-full w-1/3 rounded-md">
            <input
                type="text"
                placeholder="Search your task here..."
                className="w-full h-full px-4 py-2 bg-primary rounded-md text-sm text-onPrimarySecondary shadow-md focus:outline-none"
            />
            <IconButton
                icon="icons/search.svg"
                onClick={() => { }}
                className="absolute right-0 top-1/2 transform -translate-y-1/2"
            />
        </div>
    )
} 