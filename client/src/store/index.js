import {createSlice,configureStore} from '@reduxjs/toolkit';


const authSlice  = createSlice({
name : "auth",
initialState: {isLoggedIn:false , headerStyle:"flexSB bg-dark"},
reducers : {
    login(state){
        state.isLoggedIn = true
    },
    logout(state){   
        localStorage.removeItem("userId");
        localStorage.removeItem("userType");
        state.isLoggedIn = false
    },
    outHome(state){   
        
        state.headerStyle = "flexSB bg-dark";
    },
    inHome(state){   
        
        state.headerStyle = "flexSB";
    }

},
});
export const authActions = authSlice.actions
export const store = configureStore({
    reducer : authSlice.reducer
})