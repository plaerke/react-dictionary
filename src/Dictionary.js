import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function handleWordChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of "${word}"`);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleWordChange} />
      </form>
    </div>
  );
}
