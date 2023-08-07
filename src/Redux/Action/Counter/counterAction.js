const incremnetDecrementValueAction = actionType => {
  if (actionType == 'increment') {
    return {
      type: 'increment',
    };
  } else if (actionType == 'decrement') {
    return {
      type: 'decrement',
    };
  }
};
const setCustomValueAction = text => {
  return {type: 'changeValue', payload: text};
};

export {incremnetDecrementValueAction, setCustomValueAction};
