# Odd or Even

Play a game of odd or even.

- Add a list of players
- We want a form to know who plays, and who chooses odd or even

## Data

### Player

```jsx
// Example of Player
const player = {
  id: 1,
  name: "",
  wins: 0,
};
```

### Players

```jsx
// Example of Players
const players = [player];
const players = { 1: player };
```

## Mock Data

```jsx
const player1 = {
  id: 1,
  name: "Viktor",
  wins: 0,
};
const player2 = {
  id: 2,
  name: "The neighbor",
  wins: 0,
};
const player3 = {
  id: 3,
  name: "Chicken",
  wins: 0,
};

const playersArr = [player1, player2, player3];
const playersObj = { 1: player1, 2: player2, 3: player3 };
```

## Structure

### HTML

- body
  - header
    - h1
  - main
    - section (player)
      - ul
        - li player name
      - form
        - input (player name)
        - button
    - section (match)
      - form
        - select (player 1)
          - option (player names)
        - select (player 2)
          - option (player names)
        - select (player 1 choice)
          - option (player names)
        - button start match
      - div
        - h1 Win / Lose

### Components

- App
  - Header
  - Player
    - PlayerList
    - Player Form
  - Match
    - MatchForm
    - MatchResult

### Component Data
