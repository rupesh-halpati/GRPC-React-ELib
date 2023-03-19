import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import nanoid from 'nanoid'
import { RootState } from '..'
import { signUp } from '../../actions/auth/signUp'

export type UserCredentials = {
  email: string
  password: string
}

export type User = {
  firstName: string
  lastName: string
  initials: string
}

export type NewUser = User & UserCredentials

export type AuthError = {
  code: string
  message: string
  id: string
}

export type AuthState = {
  loading: 'idle' | 'pending'
  currentRequestId: undefined
  error: AuthError | undefined
}

const initialState: AuthState = {
  loading: 'idle',
  currentRequestId: undefined,
  error: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(signUp.fulfilled, (state) => {
      state.loading = 'idle'
      state.error = undefined
    })
    builder.addCase(signUp.rejected, (state, { payload }) => {
      state.loading = 'idle'
      state.error = payload
    })
  },
})

// Auth selector
export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer