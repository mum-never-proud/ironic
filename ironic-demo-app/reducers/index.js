import $R from 'redux';
import formStatsReducer from 'reducers/form-stats';
import userReducer from 'reducers/user';

export default $R.combineReducers({
  formStatsReducer,
  userReducer,
});
