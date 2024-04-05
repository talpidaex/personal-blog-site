import { getAllPosts } from "@/utils/post-utils"
import { GetStaticPaths, GetStaticProps } from "next"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function PostDetailPage({ content }: { content: string }) {

    return (
        <section className="mt-24">
            <div className="breadcrumb">
                Post Detail
            </div>
            <main className="post-container">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown>
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
    const postContent = allPosts.find(item => item.slug.includes(params?.slug as string))

    return {
        props: {
            content: postContent?.content || ''
        }
    }
}

