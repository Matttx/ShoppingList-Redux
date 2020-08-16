export interface stateProps {
  shoppingList: string[];
}
export interface actionProps {
  type: string;
  value: string;
}

const initialState: stateProps = { shoppingList: [] };

const addList = (state = initialState, action: actionProps) => {
  let nextState: stateProps;
  switch (action.type) {
    case "ADD_LIST":
      let shoppingIndex: number = state.shoppingList.findIndex(
        (item) => item === action.value
      );
      if (shoppingIndex === -1) {
        nextState = {
          ...state,
          shoppingList: [...state.shoppingList, action.value],
        };
        return nextState;
      } else {
        alert("Ceci est déjà dans votre liste !");
        return state;
      }
    case "DELETE_LIST":
      nextState = {
        ...state,
        shoppingList: state.shoppingList.filter(
          (item) => item !== action.value
        ),
      };
      return nextState;
    default:
      return state;
  }
};

export default addList;
