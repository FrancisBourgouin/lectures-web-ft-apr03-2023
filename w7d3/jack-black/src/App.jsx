import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PlantListItem from "./components/PlantListItem";
import WaterEverything from "./components/WaterEverything";
import { plantsObj } from "./mocks/plantData";
import { checkIfWellWatered } from "./helpers/plantHelpers";
import PlantList from "./components/PlantList";

// Header.defaultProps = {
//   amountOfPlants: 5,
//   amountOfWellWateredPlants: 4,
// };

// PlantListItem.defaultProps = {
//   id: "2",
//   name: "Tulips",
//   lastWatered: "2023-05-15",
//   wateringInterval: 4,
//   waterPlant: () => console.log("plant watered"),
// };

// WaterEverything.defaultProps = {
//   waterAllThePlants,
// };

function App() {
  const [plantData, setPlantData] = useState(plantsObj);

  const plantList = Object.values(plantData);

  const amountOfPlants = plantList.length;
  const amountOfWellWateredPlants = plantList.filter((plant) =>
    checkIfWellWatered(plant.lastWatered, plant.wateringInterval)
  ).length;

  const waterPlant = (id) => {
    // const updatedPlant = plantData[id]
    const todayDate = new Date();
    const updatedPlant = { ...plantData[id] };
    updatedPlant.lastWatered = todayDate.toLocaleDateString();

    const updatedPlantData = { ...plantData };
    updatedPlantData[id] = updatedPlant;

    setPlantData(updatedPlantData);
  };

  const waterAllThePlants = () => {
    const todayDate = new Date();
    const updatedPlantData = { ...plantData };

    for (const plantKey in plantData) {
      const updatedPlant = { ...plantData[plantKey] };
      updatedPlant.lastWatered = todayDate.toLocaleDateString();
      updatedPlantData[plantKey] = updatedPlant;
    }

    setPlantData(updatedPlantData);
  };

  return (
    <div className="App">
      <Header
        amountOfPlants={amountOfPlants}
        amountOfWellWateredPlants={amountOfWellWateredPlants}
      />
      <main>
        <PlantList plantData={plantList} waterPlant={waterPlant} />
      </main>
      <WaterEverything waterAllThePlants={waterAllThePlants} />
    </div>
  );
}

export default App;
