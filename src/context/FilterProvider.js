import { createContext, useContext, useReducer } from "react";

const initialState = {
  showAllInventory: true,
  showFastDeliveryOnly: false,
  author: [],
  genre: [],
  sortBy: "DEFAULT",
};

const productListReducer = (state, action) => {
  console.log({ action });
  switch (action.type) {
    case "TOGGLE_INVENTORY":
      return { ...state, showAllInventory: !state.showAllInventory };
    case "TOGGLE_DELIVERY":
      return { ...state, showFastDeliveryOnly: !state.showFastDeliveryOnly };
    case "AUTHOR":
      return {
        ...state,
        author: state.author.includes(action.payload.author)
          ? state.author.filter((a) => a !== action.payload.author)
          : [...state.author, action.payload.author],
      };
    case "GENRE":
      return {
        ...state,
        genre: state.genre.includes(action.payload.genre)
          ? state.genre.filter((g) => g !== action.payload.genre)
          : [...state.genre, action.payload.genre],
      };
    case "SORT":
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [
    { showAllInventory, showFastDeliveryOnly, genre, author, sortBy },
    dispatch,
  ] = useReducer(productListReducer, initialState);
  return (
    <FilterContext.Provider
      value={{
        showAllInventory,
        showFastDeliveryOnly,
        genre,
        author,
        sortBy,
        dispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
