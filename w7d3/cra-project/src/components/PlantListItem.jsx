// const exampleData = {
//   name: "Some Plant",
//   type: "Leafy",
//   lastWatered: "Wed, 17 May 2023 14:57:14 GMT",
// };

export default function PlantListItem(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>
        {props.type} - {props.lastWatered}
      </p>
    </div>
  );
}
