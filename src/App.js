import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home';
import About from './component/About/About';
import Products from './component/Products/Products';
import Main from './Layout/Main';
import Friends from './component/Friends/Friends';



function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: 'products', element: <Products /> },
        { path: 'friends', element: <Friends /> },
        { path: '*', element: <h1>This is NOT Found Component 404.</h1> },
      ]
    },




  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
