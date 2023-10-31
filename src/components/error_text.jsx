import React from "react";

function Error({ message }) {
  return (
    <div role="alert" className="text-sm text-error mb-2">
      {message}{" "}
    </div>
  );
}

export default Error;
