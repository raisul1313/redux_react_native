const inistailState = {
  count: 0,
  length: 10,
  maxCount: 100,
  changeValue: '1',
};

const counterReducer = (state = inistailState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + parseInt(state.changeValue),
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - parseInt(state.changeValue),
      };
    case 'changeValue':
      return {
        ...state,
        changeValue: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;

// counterReducer({type: 'increment'});
// counterReducer({type: 'decrement'});
