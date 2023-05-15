import FancyMain from "./components/FancyMain";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import { plantsArr } from "./data/plantData";

function App() {
  const amountOfPlants = plantsArr.length;

  return (
    <div className="App">
      <Header amountOfPlants={amountOfPlants} />
      <FancyMain>
        <PlantList plants={plantsArr} />
      </FancyMain>
    </div>
  );
}

export default App;
