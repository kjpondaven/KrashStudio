import React from "react";

const ResultPlanets = (props) => {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
  } = props;
  return (
    <div className="result-tile">
      <h2>{name}</h2>
      <div className="result-details">
        <div>
          <p>Rotation Period: {rotation_period} hours</p>
          <p>Orbital Period: {orbital_period} days</p>
          <p>Diameter: {diameter}km</p>
          <p>Climate: {climate}</p>
        </div>
        <div>
          <p>Gravity: {gravity}</p>
          <p>Terrain: {terrain}</p>
          <p>Surface Water: {surface_water}%</p>
          <p>Population: {population}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ResultPlanets;
