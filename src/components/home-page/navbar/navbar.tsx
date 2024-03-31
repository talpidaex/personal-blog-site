import Link from "next/link";
import CircleButton from "../../common/circle-button/circle-button";
import styles from "./navbar.module.css"
import { Links } from "./links";
import useThemeSelector from "@/hooks/theme-selector/theme-selector";
import { useState } from "react";
export default function Navbar() {
    const { theme, handleThemeSelection } = useThemeSelector();
    const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false)

    const handleMobileNavbarOpen = () => {
        setMobileNavbarOpen(prev => !prev)
    }
    return (
        <section>
            <div className="flex justify-between items-center">
                <span className="text-3xl">Logo</span>
                <nav className="navbar absolute lg:relative flex left-0 w-full lg:w-fit h-full top-20 lg:top-0 mt-5 lg:mt-0 ">
                    <ul className={`lg:flex lg:flex-row gap-10 absolute lg:relative z-10 h-full w-full ${!mobileNavbarOpen && 'hidden'}`}>
                        {Links.map((item, key) => (
                            <li key={key} className={`relative ${styles.underline} border-t lg:border-none dark:border-gray-600 border-gray-300 px-5 py-10 lg:p-0`} >
                                <Link href={item.href}>
                                    <span>{item.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex gap-5">
                    <div className="hidden lg:block">
                        <CircleButton iconType={theme === 'light' ? "bi:sun" : 'la:moon-solid'} width={28} height={28} action={handleThemeSelection} />
                    </div>
                    <div className="flex lg:hidden">
                        <CircleButton iconType={"quill:hamburger"} width={28} height={28} action={handleMobileNavbarOpen} />
                    </div>
                    <CircleButton iconType={"bx:user"} width={28} height={28} />
                </div>
            </div>

        </section>
    )
}