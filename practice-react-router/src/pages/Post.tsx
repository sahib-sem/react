import { useEffect, useState } from 'react';
import { Post } from './PostsList';
import { useParams } from 'react-router-dom';

export function PostPage() {
  const [post, setPost] = useState<Post | null>(null);

  const Params = useParams();
  const id = Params['id'];
  useEffect(() => {
    fetch(`http://localhost:8000/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, [id]);

  return (
    <div className="text-center">
      {post && (
        <>
          <h1>{post.title}</h1>
          <h4>{post.description}</h4>
          <p>{post.author}</p>
        </>
      )}
    </div>
  );
}
