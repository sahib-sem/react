import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';

import { App } from './App';
import { ProductPage } from './pages/ProductPage';
import { ErrorPage } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { lazy, Suspense } from 'react';

const Admin = lazy(() => import('./pages/AdminPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/products/:id',
        element: <ProductPage />,
      },
      {
        path: '/admin',
        element: (
          <Suspense
            fallback={
              <div className="text-center p-5 text-xl text-slate-600">Loading React component</div>
            }
          >
            <Admin />
          </Suspense>
        ),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
