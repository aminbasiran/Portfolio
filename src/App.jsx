import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Work from './pages/Work';
import Tool from './pages/Tool';
import About from './pages/About';
import Project from './pages/Project';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <About/>
    },
    {
      path: '/tools',
      element: <Tool/>
    },
    {
      path: '/work',
      element: <Work/>
    },
    {
      path: '/projects',
      element: <Project/>
    },
  ]);

  return (
      <RouterProvider router={router} />
  )
}

export default App
