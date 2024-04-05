import * as fs from "node:fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "contents");

function getPostData(fileName: string, index: number) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  let postSlug = fileName.replace(/\.md$/, ""); //remove extention
  const postData = {
    postId: `post-${index}`,
    slug: `blog/${postSlug}`,
    ...data,
    content,
  };

  return postData;
}

export async function getAllPosts() {
  const posts = fs.readdirSync(postsDirectory);
  const allPosts = posts.map((post, index) => getPostData(post, index));
  return allPosts;
}
