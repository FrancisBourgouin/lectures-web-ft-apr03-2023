// What is a reducer?

import { useReducer } from "react";

// A reducer function is to reduce an input to a simple output

// State => Multiple actions

// What's the purpose of the useReducer hook

const [state, dispatch] = useReducer(reducerFct, initialState);

const [count, setCount] = useState(0);

setCount(count + 1); // 1
setCount(count + 1); // 1
