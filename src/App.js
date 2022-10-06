import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home';
import About from './component/About/About';
import Products from './component/Products/Products';
import Main from './Layout/Main';
import Friends from './component/Friends/Friends';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Posts from './component/Posts/Posts';
import PostDetails from './component/PostDetails/PostDetails';



function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: 'products', element: <Products /> },
        {
          path: 'friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends />
        },
        {
          path: '/friend/:friendId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails />
        },
        {
          path: 'posts',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts />
        },
        {
          path: '/post/:postId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails />
        },
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
