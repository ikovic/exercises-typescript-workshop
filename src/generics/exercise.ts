import { assertType } from "type-plus";

type Action<ActionType extends string = string> = {
  type: ActionType;
};

// a reducer is a function that takes a state and an action and returns a new state
type Reducer<State, A extends Action> = (state: State, action: A) => State;

/* 
    Annotate the reducer function with the correct types.
*/
const reduce = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      // hint: discriminated unions
      console.log(action.message);
      return state - 1;
  }
};

assertType<number>(reducer(1, { type: "increment" }));
