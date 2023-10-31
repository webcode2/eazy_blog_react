import React from "react";
import { useLoaderData } from "react-router-dom";

function Articles() {
  const data = useLoaderData();

  console.log(data);
  return (
    <div className="flex flex-col gap-y-5">
      {data.map((post) => {
        return (
          <div
            key={post.id}
            className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md"
          >
            <div className="flex justify-between items-center">
              <span className="font-light text-gray-600">
                {new Date().toDateString()}
              </span>
              <a
                className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                href="#"
              >
                Lorem ipsum dolor sit. tag
              </a>
            </div>
            <div className="mt-2">
              <a
                className="text-2xl text-gray-700 font-bold hover:underline"
                href="#"
              >
                {post.title}{" "}
              </a>
              <p className="mt-2 text-gray-600">{post.body}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <a className="text-blue-500 hover:underline" href="#">
                Read more
              </a>
              <div>
                <a className="flex items-center" href="#">
                  <img
                    className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                    src="data.image"
                    alt="avatar"
                  />
                  <h1 className="text-gray-700 font-bold hover:underline">
                    Lorem, ipsum dolor.
                  </h1>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Articles;
