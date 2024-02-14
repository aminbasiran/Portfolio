import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Work from './components/work/Work';
import Tool from './components/tool/Tool';
import About from './components/about/About';
import Project from './components/project/Project';
import Layout from './components/layout/Layout';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout>
                    <About/>
        
                </Layout>
              
    },
    {
      path: '/tools',
      element: <Layout>
      <Tool/>

  </Layout>
    },
    {
      path: '/works',
      element: <Layout>
      <Work/>

  </Layout>
    },
    {
      path: '/projects',
      element: <Layout>
      <Project/>

  </Layout>
    },
  ]);

  return (

      <RouterProvider router={router} />
    
  )
}

export default App
