import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <span className="definition">{definition.definition}</span>
              <br />
              <span className="example">{definition.example}</span>
            </p>
          </div>
        );
      })}{" "}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
