import { combineReducers } from 'redux';

import auth from './authReducer';
import projects from './projectReducer';
import activities from './activityReducer';
import language from './languageReducer';

export default combineReducers({
  auth,
  projects,
  activities,
  language
});
