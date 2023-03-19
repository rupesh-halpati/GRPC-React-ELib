import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import nanoid from 'nanoid'
import { RootState } from '../../reducers';
import { AuthError, NewUser } from '../../reducers/auth/auth';

/**
 * NewUser sign up
 * @type {((arg: ({firstName: string; lastName: string} & UserCredentials)) => (dispatch: GetDispatch<{}>, getState: () => GetState<{}>, extra: GetExtra<{}>) => (Promise<PayloadAction<RejectWithValue<{} extends {rejectValue: infer RejectValue} ? RejectValue : unknown>, string, {arg: {firstName: string; lastName: string} & UserCredentials; requestId: string}, never> | PayloadAction<GetRejectValue<{}> | undefined, string, {arg: {firstName: string; lastName: string} & UserCredentials; requestId: string; aborted: boolean}, SerializedError>> & {abort: (reason?: (string | undefined)) => void})) & {pending: ActionCreatorWithPreparedPayload<[string, ({firstName: string; lastName: string} & UserCredentials)], undefined, string, never, {arg: {firstName: string; lastName: string} & UserCredentials; requestId: string}>; rejected: ActionCreatorWithPreparedPayload<[(Error | null), string, ({firstName: string; lastName: string} & UserCredentials), (GetRejectValue<{}> | undefined)], GetRejectValue<{}> | undefined, string, SerializedError, {arg: {firstName: string; lastName: string} & UserCredentials; requestId: string; aborted: boolean}>; fulfilled: ActionCreatorWithPreparedPayload<[RejectWithValue<{} extends {rejectValue: infer RejectValue} ? RejectValue : unknown>, string, ({firstName: string; lastName: string} & UserCredentials)], RejectWithValue<{} extends {rejectValue: infer RejectValue} ? RejectValue : unknown>, string, never, {arg: {firstName: string; lastName: string} & UserCredentials; requestId: string}>}}
 */
export const signUp = createAsyncThunk<any, NewUser, { rejectValue: AuthError }>(
  'auth/signUp',
  async (newUser, thunkAPI) => {
    // const firebase = getFirebase()
    // const firestore = firebase.firestore()
    // const { firstName, lastName, email, password } = newUser
    const { rejectWithValue } = thunkAPI

    try {
      //   const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
      //   await firestore
      //     .collection('users')
      //     .doc(response.user?.uid)
      //     .set({
      //       firstName,
      //       lastName,
      //       initials: firstName[0] + lastName[0],
      //     })
    } catch (err) {
      // const { code, message } = err
      //return rejectWithValue({ code, message, id: nanoid.nanoid() })
    }
  }
)
