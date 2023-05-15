export default function Header(props) {
  return (
    <header>
      <h1>Super Watering World of Plants</h1>
      <h2>Saving {props.amountOfPlants} plants from dehydration</h2>
    </header>
  );
}
