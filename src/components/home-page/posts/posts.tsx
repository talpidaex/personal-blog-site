import Image from "next/image";
import Post from "./post/post";

export default function Posts() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                Array.from({ length: 10 }).map((_, key) => (
                    <Post key={key} />
                ))
            }
        </section>
    )
}