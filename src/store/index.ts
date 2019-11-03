import { configureStore } from 'redux-starter-kit';

import { authReducer } from './auth';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
