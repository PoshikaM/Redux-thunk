const initialState = {
  items: [],
  loading: false,
  error: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
      case "REQUEST":
          return {
              ...state,
              loading: true,
              error: null
          };
      case "SUCCESS":
          return {
              ...state,
              loading: false,
              items: action.payload
          };
      case "UNSUCCESS":
          return {
              ...state,
              loading: false,
              error: action.error
          };
      default:
          return state;
  }
};

export default Reducer;