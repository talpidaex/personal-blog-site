import { Icon } from "@iconify/react";

export default function Searchbar() {
    return (
        <div className="relative flex justify-start items-center">
            <button type="button" className="absolute top-0 bottom-0 left-4">
                <Icon icon="fe:search" width={28} height={28} />
            </button>
            <input placeholder="Search posts" className="pl-14 py-5 rounded-full text-black dark:text-white 
             lg:w-[70%] bg-transparent border hover:border-yellow-400 
            dark:focus:bg-gray-700 focus:bg-gray-100 focus:outline-none" />
        </div>

    )

}