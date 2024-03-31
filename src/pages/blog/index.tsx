import Hero from "@/components/home-page/hero/hero";
import Posts from "@/components/home-page/posts/posts";
import { getAllPosts } from "@/utils/post-utils";
import { GetStaticProps } from "next";
import { Posts as PostsType } from "./constants";


export default function BlogPage({ posts }: PostsType) {
    return (
        <>
            <Hero />
            <Posts posts={posts} />
        </>
    )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
    const result = await getAllPosts()
    return {
        props: {
            posts: result
        }
    }
}