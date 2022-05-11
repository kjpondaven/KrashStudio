import React from "react";

const ResultPeople = (props) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = props;
  return (
    <div className="result-tile">
      <h2>{name}</h2>
      <div className="result-details">
        <div>
          <p>Height: {height}cm</p>
          <p>Mass: {mass}kg</p>
          <p>Hair Color: {hair_color}</p>
          <p>Skin Color: {skin_color}</p>
        </div>
        <div>
          <p>Eye Color: {eye_color}</p>
          <p>Birth Year: {birth_year}</p>
          <p>Gender: {gender}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ResultPeople;
