// Header (S: NO P: amountOfPlants, amountOfWellWateredPlants)
export default function Header(props) {
  const { amountOfPlants, amountOfWellWateredPlants } = props;

  return (
    <header>
      <h1>Watering Plants V - Water Strikes Back</h1>
      <p>
        {Math.round((amountOfWellWateredPlants / amountOfPlants) * 100)}% of plants are
        well watered (based of {amountOfPlants} plants)
      </p>
    </header>
  );
}

// Header.defaultProps = {
//   amountOfPlants: 5,
//   amountOfWellWateredPlants: 4,
// };
