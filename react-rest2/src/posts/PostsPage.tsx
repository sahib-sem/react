import { PostData, NewPostData } from './types';
import { PostList } from './PostsList';
import { NewPostForm } from './NewPostForm';
import { savePost } from './SavedPost';
import { useLoaderData } from 'react-router-dom';
import { assertIsPosts } from './getPosts';

export function PostsPage() {
  const posts = useLoaderData();
  assertIsPosts(posts);
  async function handleSave(newPostData: NewPostData) {
    await savePost(newPostData);
  }
  return (
    <div className="w-96 mx-auto mt-6">
      <h2 className="text-xl text-slate-900 font-bold">Posts</h2>
      <NewPostForm onSave={handleSave}></NewPostForm>
      <PostList posts={posts}></PostList>
    </div>
  );
}
