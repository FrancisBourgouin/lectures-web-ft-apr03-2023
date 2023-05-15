export default function PlantWateringStatus(props) {
  const { lastWatered, wateringInterval } = props;

  const lastWateredDate = new Date(lastWatered);
  const todayDate = new Date();

  const diffInMs = todayDate.getTime() - lastWateredDate.getTime();
  const diffInS = diffInMs / 1000;
  const diffInDays = diffInS / 86400;

  const isWellWatered = diffInDays < wateringInterval;

  return (
    <>
      {isWellWatered && <p>Good job! Keep watering!</p>}
      {!isWellWatered && (
        <p className="bad">OH MY GOD THE PLANT IS DRY AS A PIECE OF SAND IN SPACE</p>
      )}
    </>
  );
  return (
    <>
      {isWellWatered ? (
        <p>Good job! Keep watering!</p>
      ) : (
        <p>OH MY GOD THE PLANT IS DRY AS A PIECE OF SAND IN SPACE</p>
      )}
    </>
  );
}

// JSX expressions must have one parent element.

// Component is a function, return is the JSX
// Component => React.createElement(...)

// const someFunction = () => {
//   return 1,2,3
// }

// &&  => Short Circuit Operator

// if(false && true)
