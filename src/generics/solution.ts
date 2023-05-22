import { assertType } from "type-plus";

type Action<ActionType extends string = string> = {
  type: ActionType;
};

type Reducer<State, A extends Action> = (state: State, action: A) => State;

type Actions = { type: "increment" } | { type: "decrement"; message: string };

const reducer: Reducer<number, Actions> = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      console.log(action.message);
      return state - 1;
  }
};

assertType<number>(reducer(1, { type: "increment" }));
