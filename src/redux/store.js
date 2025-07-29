import { configureStore } from "@reduxjs/toolkit";
import modeReducer from '../features/mode/modeReducer'

export const store = configureStore({
    reducer: {
        // newsData: newsDataReducer,
        modeStore:modeReducer//light or dark mode
    }
}
)

