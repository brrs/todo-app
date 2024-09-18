import { MenuItem } from "./common/menu-item"
import { BellIcon, DashboardIcon, HelpIcon, LogOutIcon, MyTaskIcon, SettingsIcon, TaskCategoryIcon, VitalIcon } from "./common/icons"
import { useState } from "react";

interface NavBarProps {

}

export default function NavBar({ }: NavBarProps) {
    const [activeItem, setActiveItem] = useState("dashboard")

    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: DashboardIcon },
        { id: "vital", label: "Vital Task", icon: VitalIcon },
        { id: "my", label: "My Task", icon: MyTaskIcon },
        { id: "category", label: "Task Categories", icon: TaskCategoryIcon },
        { id: "settings", label: "Settings", icon: SettingsIcon },
        { id: "help", label: "Help", icon: HelpIcon },

    ];
    return (
        <nav className="w-1/5 self-stretch bg-secondary rounded-tr-2xl relative flex flex-col">


            <div className="w-full flex flex-col items-center mt-[-25px]">
                <img
                    className="w-16 object-center rounded-full  self-center"
                    src="https://avatars.githubusercontent.com/u/28940903?v=4"
                    alt="Profile picture"
                />
                <p className="text-onSecondary">Firsrt Last</p>
                <p className="text-onSecondary">email@email.com</p>
            </div>

            <div className="flex flex-col px-4 my-4 h-full justify-between">
                <div className="flex flex-col space-y-4 ">
                    {menuItems.map((item) => (
                        <MenuItem
                            key={item.id}
                            label={item.label}
                            Icon={item.icon}
                            isActive={activeItem === item.id}
                            onClick={() => setActiveItem(item.id)}
                        />
                    ))}
                </div>

                <MenuItem
                    className=""
                    label="Logout"
                    Icon={LogOutIcon}
                    isActive={false}
                    onClick={() => { }}
                />
            </div>

            <div>

            </div>

        </nav>
    )
}

