import { configureStore } from '@reduxjs/toolkit'
import { persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from './storage'; 
import userSlice from './slice/userSlice'; 


const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["tracking"],
};

const rootReducer = combineReducers({
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']