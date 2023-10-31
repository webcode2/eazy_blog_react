import React from 'react';
import { BlogSingle } from './pages/home/App';
import Home from "./pages/home/home";
import Login from "./pages/auth/login";
import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/blogs/layout';
import ErrorPage from './pages/404';
import Register from './pages/auth/register';
import Articles from './pages/blogs/blog';

export const router = createBrowserRouter([
  { path: "/bout", element: <Home />, },
  { path: "accounts/login", element: <Login /> },
  { path: "accounts/register", element: <Register /> },

  {
    element: <Layout />,
    path: "articles",
    children: [
      {
        index: true,
        element: <Articles />,
        path: "all",
        loader: async () => {
          return fetch('http://localhost:8000/api/v1/articles');
          
        },
      },
      {
        element: <BlogSingle />,
        path: ":articlesId",
        loader: async ({ params }) => {
          console.log({ params });
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.articlesId}`);
        },
        children: [
          {
            element: <BlogSingle />,
            path: "edit",
            loader: async ({ params }) => {
              return [];
            },
          },
        ]
      },
    ],
  },

  { path: "/", element: <Home />, },
  { path: "*", element: <ErrorPage /> }
]);
