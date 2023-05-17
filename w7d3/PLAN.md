# Watering Plants V - Water Strikes Back

Show a list of plants with their name, watering interval, lastwatered. Have a possiblity of watering one plant, and watering all the plants.

## Data

### Plant

```jsx
const plant = {
  id: 1,
  name: "Fern",
  wateringInterval: 2,
  lastWateredDate: "Wed, 14 Jun 2017 07:00:00 GMT",
};
```

### PlantList

```jsx
const plants = {
  1: plant,
  2: plant,
};
```

## Seed Data

```jsx
export const plant1 = {
  id: "1",
  name: "Monstera",
  lastWatered: "2023-05-20",
  wateringInterval: 7,
};
export const plant2 = {
  id: "2",
  name: "Tulips",
  lastWatered: "2023-02-10",
  wateringInterval: 4,
};
export const plant3 = {
  id: "3",
  name: "Cherry",
  lastWatered: "2023-03-20",
  wateringInterval: 60,
};
export const plant4 = {
  id: "4",
  name: "Money Tree",
  lastWatered: "2021-01-20",
  wateringInterval: 1000,
};

export const plantsArr = [plant1, plant2, plant3, plant4];
export const plantsObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };
```

## Structure

### HTML

- body
  - header
    - h1 title of app
  - main
    - section
      - article
        - img plant img
        - h1 plant name
        - p last watered date
        - button water the plant
    - button water all the plants

### Components

- App
  - Header
  - PlantList
    - PlantListItem
  - WaterEverything

### Component Data

- App (S: plantData{} P: NO NEVER !)
  - Header (S: NO P: amountOfPlants, amountOfWellWateredPlants)
  - PlantList (S: NO P: plantData{}[], waterPlant())
    - PlantListItem (S: NO P: waterPlant(), the keys of plantObj (name/lastwatered/..))
  - WaterEverything (S: NO P: waterEverything())

State vs Props

Props are given from the parent
State, data that we are responsible for
