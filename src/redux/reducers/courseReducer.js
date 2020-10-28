const couseReducer = (state, action) => {

  if (state === undefined) {
    return {
      data: null,
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_COURSES_REQUEST':
      return {
        data: null,
        loading: true,
        error: null
      };

    case 'FETCH_COURSES_SUCCESS':
      return {
        data: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_COURSES_FAILURE':
      return {
        data: null,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default couseReducer;
