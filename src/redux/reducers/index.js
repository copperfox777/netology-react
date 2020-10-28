import couseReduces from './courseReducer';

const reducer = (state, action) => {
  return {
    courses: couseReduces(state, action),
  };
};

export default reducer;
