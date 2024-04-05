import { PostsType, PostType } from "@/utils/post-types";
import Post from "./post/post";

export default function Posts({ posts }: PostsType) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                posts.map((item: PostType, key) => (
                    <Post key={key} title={item.title} description={item.description} slug={item.slug} />
                ))
            }
        </section>
    )
}