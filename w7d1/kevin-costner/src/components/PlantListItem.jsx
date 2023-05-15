import PlantWateringStatus from "./PlantWateringStatus";

// Receives: name, type, lastWatered, wateringInterval

// Example obj:
// id: "1",
// type: "Monsterous plant",
// name: "Monstera",
// lastWatered: "2023-05-20",
// wateringInterval: 7,

export default function PlantListItem(props) {
  return (
    <li>
      <h1>{props.name}</h1>
      <p>
        {props.type} / {props.lastWatered}
      </p>
      <PlantWateringStatus
        lastWatered={props.lastWatered}
        wateringInterval={props.wateringInterval}
      />
    </li>
  );
}
