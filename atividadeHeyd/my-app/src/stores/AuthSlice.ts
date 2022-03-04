import { createSlice } from '@reduxjs/toolkit'
type InitialStateProps = {
    isAuth: boolean
}
export const AuthSlice = createSlice({
    name: 'authLogin',
    initialState: {
        isAuth: false,
    } as InitialStateProps,
    reducers: {
        authenticate: (state) => {
            state.isAuth = !state.isAuth
        }
    }
})
export const { authenticate } = AuthSlice.actions
export const selectAuth = (state: any) => state.isAuth
export default AuthSlice.reducer