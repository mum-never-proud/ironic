import $R from 'redux';

function userDetails(state = [], action) {
  switch (action.type) {
    case 'SUBMIT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const store = $R.createStore(userDetails, { isSubmitted: false });

export default store;
