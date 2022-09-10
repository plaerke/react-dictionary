import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary() {
  const [word, setWord] = useState("crazy");
  const [wordData, setWordData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleWordChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  function handleDictionaryResponse(response) {
    setWordData(response.data[0]);
    setLoaded(true);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000012eb939c14058437a8e0539be359383d6";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=4`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    return search();
  }
}
