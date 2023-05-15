# Watering Plant App

Show a list of plants, with their name, type, last watered and a warning if they are dangerously dry.

## Data

## Plant

```jsx
const plant = {
  id: "",
  name: "",
  type: "",
  lastWatered: "date",
  wateringInterval: 0,
};
```

## Plants

Objects: Easier to access a specific plant, reference for plants that have been watered, good for watering action

```jsx
const plants = [plant, plant]; // Nobody :(

const plants = { id: plant, id: plant }; // Mostly everyone (Overkill)

Object.values(plantObj);
```

## Seed

```jsx
const plant1 = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2023-05-20",
  wateringInterval: 7,
};
const plant2 = {
  id: "2",
  type: "Paper or real?",
  name: "Tulips",
  lastWatered: "2023-02-10",
  wateringInterval: 4,
};
const plant3 = {
  id: "3",
  type: "Blossoms are nice",
  name: "Cherry",
  lastWatered: "2023-03-20",
  wateringInterval: 60,
};
const plant4 = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2021-01-20",
  wateringInterval: 1000,
};

const plantsArr = [plant1, plant2, plant3, plant4];
const plantsObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };
```

## Structure

### HTML

- body
  - header
    - h1 (title)
  - main
    - section
      - h1 (title of section)
      - ul
        - li
          - h1 (plant name)
          - p (type and last Watered)
          - p
            - span bold well watered or not

### Components

EJS => partials _header _... => Building blocks
React => Components => Building blocks

Components love Blinders

- App
  - Header
  - PlantList
    - PlantListItem
      - WateringStatus

### Component Data

- App
  - Header
  - PlantList (Arr plants)
    - PlantListItem (Singular plant)
      - WateringStatus (wateringInterval & lastWatered)
