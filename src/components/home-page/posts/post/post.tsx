import { PostType } from "@/utils/post-types";
import Image from "next/image";
import Link from "next/link";

type Post = Omit<PostType, "content">

export default function Post({ title, description, slug }: Post) {
    return (
        <div className="post flex flex-col justify-start items-start gap-5 cursor-pointer">
            <Link href={`blog/${slug}`}>
                <Image className="post-image rounded-sm" src={"/411x548.png"} alt="post_1" width={411} height={548} />
                <span>{description}</span>
                <h2 className="text-black text-2xl dark:text-white">{title}</h2>
            </Link>
        </div>
    )
}