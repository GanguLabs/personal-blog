import React from "react";

function Laboratory() {
  return <div>Lab</div>;
}

export default Laboratory;

export async function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
