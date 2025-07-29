import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    lightMode: true
}

const modeReducer = createSlice({
    name:"mode",
    initialState,
    reducers: {
        changeMode: (state) => {
            state.lightMode = !state.lightMode
        }
    }
})
export  const { changeMode } = modeReducer.actions
export  default modeReducer.reducer