import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <div>This is Home section</div> },
    { path: '/home', element: <div>This is Home section</div> },
    { path: '/about', element: <div>This is About section</div> },
    { path: '/product', element: <div>This is Product section</div> },
    { path: '*', element: <div>This is NOT Found Text 404.</div> },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
