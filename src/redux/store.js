import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './features/languages/languageSlice'
import messageReducer from './features/messages/messageSlice'

export const store = configureStore({
    reducer: {
        language: languageReducer,
        messages: messageReducer
    },
})