const programsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PROGRAMS':
      return {
        ...state,
        programs: action.payload
      };
    default:
      return state;
  }
};

export default programsReducer