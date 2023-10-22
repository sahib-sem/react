import { ContactPage } from './ContactPage';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ThankYouPage } from './ThankYouPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="contact" />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/contact/:name',
    element: <ThankYouPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
