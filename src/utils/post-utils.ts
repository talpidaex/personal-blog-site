import * as fs from "node:fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "contents");

function getPostData(fileName: string) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); //remove extention

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export async function getAllPosts() {
  const posts = fs.readdirSync(postsDirectory);
  const allPosts = posts.map((post) => getPostData(post));
  return allPosts;
}
