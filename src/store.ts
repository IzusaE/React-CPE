import { configureStore } from '@reduxjs/toolkit'
import partReducer from './reducers/partReducer'
import robotReducer from './reducers/robotReducer'

const store = configureStore({
    reducer: {
      part: partReducer,
      robot: robotReducer
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch