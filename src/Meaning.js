import React from "react";
import Synonyms from "./Synonyms";

function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <strong>Example: </strong>
              <em>{definition.example}</em>
              <br />
            </p>
          </div>
        );
      })}
      <p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}

export default Meaning;
