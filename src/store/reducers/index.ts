import { combineReducers } from '@reduxjs/toolkit'


// Reducers
// import counterReducer from 'features/counter/counterSlice'
// import todosReducer from 'features/todos/todosSlice'
// import usersReducer from 'features/users/usersSlice'
// import visibilityFilterReducer from 'features/visibilityFilter/filtersSlice'
import authReducer from './auth/auth'

const rootReducer = combineReducers({
  auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer