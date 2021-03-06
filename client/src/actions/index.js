import axios from 'axios';

import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  const { data } = await axios.get('/api/current-user');

  dispatch({ type: FETCH_USER, payload: data });
};

export const handleToken = token => async (dispatch) => {
  const { data } = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: data });
};

export const submitSurvey = (survey, history) => async (dispatch) => {
  const { data } = await axios.post('/api/surveys', survey);

  history.push('/surveys');

  dispatch({ type: FETCH_USER, payload: data });
};
