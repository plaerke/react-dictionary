import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  const [word, setWord] = useState("naughty");
  const [wordData, setWordData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleWordChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  function handleResponse(response) {
    setWordData(response.data[0]);
    setLoaded(true);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h4>What word are you looking for?</h4>
        <form onSubmit={handleSubmit}>
          <div className="word-search-submit">
            <input
              type="search"
              placeholder="Type a word here"
              onChange={handleWordChange}
              className="word-search"
            />
            <input type="submit" value="Search" className="word-submit" />
          </div>
        </form>
        <Results data={wordData} />
      </div>
    );
  } else {
    return search();
  }
}
