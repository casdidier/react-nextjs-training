function Blog({ posts }) {
  // Render posts...
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }

  // This function gets called at build time
  export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://.../posts')
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => `/posts/${post.id}`)

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

  export default Blog