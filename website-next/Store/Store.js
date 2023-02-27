const { configureStore } = require("@reduxjs/toolkit");
const { AuthSlice } = require("./Authslice");

const Store = configureStore({
    reducer : {
        Auth : AuthSlice.reducer
    }
})

export default Store;