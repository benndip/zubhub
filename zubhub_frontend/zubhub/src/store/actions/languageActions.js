import * as at from '../actionTypes';

export const changeLanguage = locale => {
    console.log(locale);
    return dispatch => {
      dispatch({
        type: at.CHANGE_LANGUAGE,
        payload: { locale },
      });
    };
  };