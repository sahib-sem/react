import { PostsPage } from './posts/PostsPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getPosts } from './posts/getPosts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PostsPage />,
    loader: getPosts,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
