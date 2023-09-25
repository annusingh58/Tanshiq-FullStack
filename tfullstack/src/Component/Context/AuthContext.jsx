import { createContext, useEffect, useReducer } from "react";
// import toast from "react-hot-toast";
import axios from "axios";


export const AuthContext=createContext();

const initialState={user:null}

const reducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {...state,user:action.payload};
        case "LOGOUT":
            // localStorage.removeItem("JWTToken")
            // toast.success("logout suceesfully")
            return {...state,user:null};
        default:
            return state;
    }
}
// higher oreder component 
const HandleAuthContext=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    const login = (userData) => {
        if (userData.token) {
            localStorage.setItem("JWTToken", JSON.stringify(userData.token));
        }
        dispatch({
            type: "LOGIN",
            payload: userData?.payload
        })
    }

    const logout = () => {
        localStorage.removeItem("JWTToken");
        dispatch({
            type: "LOGOUT"
        })
    }

    useEffect(()=>{
        const token =JSON.parse(localStorage.getItem("JWTToken"));
        async function getcurrentuser(){
            try{
           if(token){
            const response=await axios.post("http://localhost:2000/anu/getcurrentuser",{token})
         
            if(response.data.success){
                dispatch({
                    type:"LOGIN",
                    payload:response?.data?.user
                });
            }
           }    
        }
        catch (error) {
            console.log(error)
        }
    }
     getcurrentuser();
    },[])
    return(
        <AuthContext.Provider value={{state,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default HandleAuthContext;
