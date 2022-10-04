import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home';
import About from './component/About/About';
import Products from './component/Products/Products';



function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: 'products', element: <Products /> },
    { path: '*', element: <div>This is NOT Found Text 404.</div> },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
