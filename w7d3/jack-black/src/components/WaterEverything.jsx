// WaterEverything (S: NO P: waterEverything())

export default function WaterEverything(props) {
  const { waterAllThePlants } = props;

  return <button onClick={waterAllThePlants}>Water EVERYTHING</button>;
}

// const waterAllThePlants = () => console.log("Yep everything was watered");

// WaterEverything.defaultProps = {
//   waterAllThePlants,
// };
