export type PostType = {
  title: string;
  description: string;
  content: string;
  slug: string;
};

export type PostsType = {
  posts: [PostType];
};
