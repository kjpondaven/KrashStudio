import React from "react";

const ResultVehicles = (props) => {
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    vehicle_class,
  } = props;
  return (
    <div className="result-tile">
      <h2>{name}</h2>
      <div className="result-details">
        <div>
          <p>Model: {model}</p>
          <p>Manufacturer: {manufacturer}</p>
          <p>Cost: {cost_in_credits}</p>
          <p>Length: {length}m</p>
          <p>Max atmosphering speed: {max_atmosphering_speed}kph</p>
        </div>
        <div>
          <p>Crew: {crew}</p>
          <p>Passengers: {passengers}</p>
          <p>Cargo capacity: {cargo_capacity}</p>
          <p>Consumables: {consumables}</p>
          <p>Vehicle Class: {vehicle_class}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ResultVehicles;
