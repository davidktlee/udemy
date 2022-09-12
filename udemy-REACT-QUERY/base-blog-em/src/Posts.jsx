import { useState } from 'react'
import { useQuery } from 'react-query'
import { PostDetail } from './PostDetail'
const maxPostPage = 10

async function fetchPosts(pageNum) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
  )
  return response.json()
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPost, setSelectedPost] = useState(null)

  // replace with useQuery
  const { isLoading, isError, data } = useQuery(['posts', currentPage], () =>
    fetchPosts(currentPage)
  )
  if (isLoading) return <div>Loading..</div>
  if (isError) return <div>Error...</div>
  return (
    <>
      <ul>
        {data.map((post) => (
          <li key={post.id} className="post-title" onClick={() => setSelectedPost(post)}>
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  )
}
