import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
export type Post = {
  id: string;
  title: string;
  author: string;
  description: string;
};
export function PostsLists() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('title_like');
  useEffect(() => {
    async function getPosts() {
      try {
        let data;
        if (search === null || search === '') {
          data = await fetch('http://localhost:8000/posts');
        } else {
          data = await fetch(`http://localhost:8000/posts?title_like=${search}`);
        }
        const posts = await data.json();
        console.log(search);
        if (data.ok) {
          setPosts(posts);
          console.log(posts);
        }
      } catch (error) {
        console.log(error);
        setPosts([]);
      }
    }
    getPosts();
  }, [search]);

  return (
    <div className="text-center">
      {posts.map((p) => (
        <li key={p.id}>
          <Link to={`${p.id}`}>{p.title}</Link>
        </li>
      ))}
    </div>
  );
}
