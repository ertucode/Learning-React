import React from "react";

export default function AuthorList({ authors }) {
  return (
    <div>
      {authors.map((author) => (
        <div key={author.id}>{author.name}</div>
      ))}
    </div>
  );
}
