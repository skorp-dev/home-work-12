

export const usersReducer = (state = [], action) => {
  if (action.type === "USER_ADD") {
    return [...state, action.payload];
  } else if (action.type === "USER_DELETE") {
    return state.filter(({id}) => id !== action.payload);
  } else {
    return state;
  }
};