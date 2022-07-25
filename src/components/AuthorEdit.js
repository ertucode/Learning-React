import React from "react";

export default function AuthorEdit({
  author,
  handleAuthorChange,
  handleAuthorDelete,
}) {
  function handleChange(changes) {
    handleAuthorChange(author.id, { ...author, ...changes });
  }

  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={author.name}
        onInput={(e) => handleChange({ name: e.target.value })}
      ></input>
      <button
        className="btn btn--danger"
        onClick={() => handleAuthorDelete(author.id)}
      >
        &times;
      </button>
    </>
  );
}
