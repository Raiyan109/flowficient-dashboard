import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    locale: 'en',
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanuage: (state, action) => {
            state.locale = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeLanuage } = languageSlice.actions

export default languageSlice.reducer