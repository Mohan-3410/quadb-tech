import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/slice'

const store = configureStore({
    reducer: tasksReducer,
});

export default store;