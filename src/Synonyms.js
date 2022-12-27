import React from "react";

function Synonyms(props) {
  if (props.synonyms) {
    console.log(props);
    return (
      <ul className="Synonyms">
        {props.synonyms.map((synonym, index) => {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}

export default Synonyms;
