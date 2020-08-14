const initialState = {
  retries: 0,
};

export default function formStats(state = initialState, payload) {
  switch (payload.type) {
    case 'INC_RETRY_COUNT':
      return { ...state, retries: state.retries + 1 };
    default:
      return state;
  }
}
