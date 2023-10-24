import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App,{BlogSingle,Blogs,} from './pages/home/App';
import Home from"./pages/home/home"
import Login from"./pages/login/login"

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './pages/blogs/layout';
import ErrorPage from './pages/404';


const router = createBrowserRouter([
  {    path: "/bout", element: <Home />,},
  {    path: "/login", element: <Login />,},
  
  {element: <Layout />,
  path: "articles",   
  children: [
    {
      index:true,
      element: <Blogs />,
      path: "all",
      loader: async () => {        
        return fetch('https://jsonplaceholder.typicode.com/posts');
      },
     

    },
    {
      element: <BlogSingle  />,
      path: ":articlesId",
      loader: async ({ params }) => {        
        console.log({params});
        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.articlesId}`);
      },
      children: [
        {
          element: <BlogSingle  />,
          path: "edit",
          loader: async ({ params }) => {        
            return[];
          },
        },]

    },
   
  ],
},

{    path: "/",        element: <Home/>,},
{path:"*", element:<ErrorPage/>}
]);













const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
