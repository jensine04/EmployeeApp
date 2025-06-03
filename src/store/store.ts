import { legacy_createStore as createStore , applyMiddleware } from 'redux';
import logger from 'redux-logger';
import employeeReducer from './employee/employeeReducer';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import employeeBaseApi from '../api-service/api';
import { setupListeners } from '@reduxjs/toolkit/query';

//export const store = createStore(employeeReducer , undefined , applyMiddleware(logger) )

export const store=configureStore({
    reducer:{
        employee: employeeReducer,
        [employeeBaseApi.reducerPath]: employeeBaseApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(employeeBaseApi.middleware)
})

setupListeners(store.dispatch)
export default store;

export type RootState = ReturnType<typeof store.getState>
	
export type AppDispatch = typeof store.dispatch
	
export type AppStore = typeof store
	
 
	
export const useAppDispatch = () => useDispatch<AppDispatch>()
	
//export const useAppSelector = useSelector<RootState, any>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

