import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { PostsLists } from './pages/PostsList';
import { HomePage } from './pages/HomePage';
import { PostPage } from './pages/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/posts',
        element: <PostsLists />,
      },
      {
        path: '/posts/:id',
        element: <PostPage />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
