import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

export type User = {
    firstName: string
    lastName: string
}

export type NewUser = User

export type AuthError = {
    code: string
    message: string
    id: string
}

export type FormState = {
    [key: string]: any
}

const initialState: FormState = {
}

export const formSlice: any = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setForm: (state, action) => {
            console.log(state)
            console.log('action', action)
            state.login = action.payload;
        },
    },
})

// Auth selector
export const selectForm = (state: RootState) => state.form

export const {
    setForm
  } = formSlice.actions;

export default formSlice.reducer