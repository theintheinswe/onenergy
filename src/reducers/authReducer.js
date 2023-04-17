import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {fetch2} from '../helpers/fetch2'
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    token:null,
    loading:false,
    error:""
}


export const signinUser = createAsyncThunk(
    'signinuser',

    async (body) => { 
      const result =  await fetch2(body);
      return result ;
    }
    
)
export const addToken = createAsyncThunk(
    'addtoken',
    async ()=>{
       const result =  await AsyncStorage.getItem('token') 
       return result  
    }
)

const authReducer = createSlice({
    name:"user",
    initialState,
    reducers:{
        logout:(state,action)=>{
            state.token = null
            AsyncStorage.removeItem('token')
        }
    }, 
    extraReducers:{        
        [addToken.fulfilled]:(state,action)=>{
            state.token = action.payload
        },      
        [signinUser.pending]:(state,action)=>{
            state.loading = true
        },
        [signinUser.fulfilled]:(state,action)=>{         
            state.loading = false
            if(action.payload.error){                
                state.error = action.payload.error                
            }else{
                state.token = action.payload.token
                AsyncStorage.setItem('token', action.payload.token)               
            }
          },
    }

})

export const {logout}  = authReducer.actions
export default authReducer.reducer