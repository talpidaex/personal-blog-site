import Image from "next/image";

export default function Post() {
    return (
        <div className="post flex flex-col justify-start items-start gap-5 cursor-pointer">
            <Image className="post-image rounded-sm" src={"/411x548.png"} alt="post_1" width={411} height={548} />
            <span>Esse commodo ea nostrud consequat dolor adipisicing duis labore.</span>
            <h2 className="text-black text-2xl dark:text-white">Titles</h2>
        </div>
    )
}