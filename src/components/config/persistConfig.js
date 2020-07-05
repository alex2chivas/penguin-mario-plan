import storage from 'redux-persist/lib/storage'

export const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['project'], // which reducer want to store
  blacklist: ['auth']
};