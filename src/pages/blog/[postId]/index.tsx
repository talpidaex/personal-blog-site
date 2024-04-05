import { getAllPosts } from "@/utils/post-utils"
import { GetStaticPaths, GetStaticProps } from "next"
import MarkdownView from "react-showdown"
export default function PostDetailPage({ content }: { content: string }) {

    return (
        <section className="mt-24">
            <div className="breadcrumb">
                Post Detail
            </div>
            <main className="prose prose-lg sm:prose-xl dark:prose-invert post-container">
                <MarkdownView markdown={content}>
                </MarkdownView>
            </main>
        </section>
    )
}



export const getStaticPaths: GetStaticPaths = async () => {
    const allPosts = await getAllPosts();
    const postIds = allPosts.map(item => ({ params: { postId: item.slug } }))
    return {
        paths: postIds,
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const allPosts = await getAllPosts();
    const postContent = allPosts.find(item => item.slug.includes(params?.postId as string))
    return {
        props: {
            content: postContent?.content || ''
        }
    }
}

