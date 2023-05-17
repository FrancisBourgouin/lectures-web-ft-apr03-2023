// PlantListItem (S: NO P: waterPlant(), the keys of plantObj (name/lastwatered/..))
import { checkIfWellWatered } from "../helpers/plantHelpers";

export default function PlantListItem(props) {
  const { name, lastWatered, wateringInterval, waterPlant } = props;
  const isWellWatered = checkIfWellWatered(lastWatered, wateringInterval);

  const plantImgSrc =
    "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80";

  return (
    <article
      style={{
        border: "0.4em solid black",
        borderColor: isWellWatered ? "green" : "red",
      }}
    >
      <img src={plantImgSrc} alt="" />
      <div>
        <h1>{name}</h1>
        <p>Last Watered on: {lastWatered}</p>
        <button onClick={waterPlant}>WATER PLANT</button>
      </div>
    </article>
  );
}

// PlantListItem.defaultProps = {
//   id: "2",
//   name: "Tulips",
//   lastWatered: "2023-05-15",
//   wateringInterval: 4,
//   waterPlant: () => console.log("plant watered"),
// };
