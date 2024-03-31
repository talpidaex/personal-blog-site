export type Post = {
  title: string;
  description: string;
  content: string;
  slug: string;
};

export type Posts = {
  posts: [Post];
};
