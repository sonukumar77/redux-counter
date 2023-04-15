const INITIAL_STATE = {
  count: 0
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return { ...state, count: state.count + 1 };
    case "DECREASE_COUNTER":
      return { ...state, count: state.count - 1 };
    case "RESET_COUNTER":
      return { ...state, count: 0 };
    default: {
      return state;
    }
  }
};

export default counterReducer;
