import Image from "next/image"
import Searchbar from "../search-bar/search-bar"

export default function Hero() {
    return (
        <>
            <div className="grid grid-cols-4 lg:grid-cols-12 h-[100vh] w-full place-content-center gap-10">
                <div className="col-span-full lg:col-span-5 flex flex-col gap-10">
                    <h1 className="text-2xl lg:text-4xl leading-normal lg:w-[85%]">ReactJS & NodeJS ile ilgili öğrendiklerimi paylaşma çabaları..</h1>
                    <Searchbar />
                </div>
                <div className="col-span-full lg:col-span-7">
                    <Image src={"./vercel.svg"} height={500} width={500} alt="logo" />
                </div>

            </div>
        </>
    )

}