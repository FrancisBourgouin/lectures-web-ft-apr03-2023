import PlantListItem from "./PlantListItem";

// PlantList (S: NO P: plantData{}[], waterPlant())
export default function PlantList(props) {
  const { waterPlant, plantData } = props;

  const parsedPlants =
    Array.isArray(plantData) &&
    plantData.map((plant) => (
      <PlantListItem {...plant} key={plant.id} waterPlant={() => waterPlant(plant.id)} />
    ));

  return <section>{parsedPlants}</section>;
}
