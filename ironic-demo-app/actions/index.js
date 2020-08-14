import { INC_RETRY_COUNT, SUBMITTING } from './types';

export const incrementRetryCount = (dispatch) => {
  dispatch({ type: INC_RETRY_COUNT });
};

export const submitUserDetails = (dispatch) => (body) => {
  dispatch({ type: SUBMITTING, payload: { isSubmitting: true } });
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then(() => dispatch({
      type: SUBMITTING,
      payload: {
        isSubmitting: false,
        isSubmitted: true,
        ...body,
      },
    }))
    .catch(() => dispatch({ type: SUBMITTING, payload: { isSubmitting: false } }));
};
