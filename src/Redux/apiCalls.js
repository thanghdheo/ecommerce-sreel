import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./UserSlice"

export const login = async (dispatch,user) => {
    console.log('user',user)
    dispatch(loginStart())

    try{
        const res = await axios.post("https://fakestoreapi.com/auth/login",user)
        dispatch(loginSuccess({
            currentUser: res.data,
            username: user.username
        }))
    }catch(err){
        dispatch(loginFailure())
    }
}