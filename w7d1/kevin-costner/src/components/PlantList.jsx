import PlantListItem from "./PlantListItem";

// Receives plants as an Array of plant objects

export default function PlantList(props) {
  const plants = props.plants || [];

  const parsedComponents = plants.map((plant) => (
    <PlantListItem key={plant.id} {...plant} />
  ));

  return (
    <section>
      <h1>List of Plants</h1>
      <ul>{parsedComponents}</ul>
    </section>
  );
}
