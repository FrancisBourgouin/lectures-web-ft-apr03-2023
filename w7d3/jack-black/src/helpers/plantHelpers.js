export const checkIfWellWatered = (lastWatered, wateringInterval) => {
  const todayDate = new Date();
  const wateredDate = new Date(lastWatered);

  const diffInDays = (todayDate.getTime() - wateredDate.getTime()) / 1000 / 86400;

  return diffInDays < wateringInterval;
};
