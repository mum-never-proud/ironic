const initialState = {
  email: '',
  password: '',
  isSubmitting: false,
  isSubmitted: false,
};

export default function userDetails(state = initialState, action) {
  switch (action.type) {
    case 'SUBMITTING':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
