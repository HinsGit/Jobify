import React,{ useContext, useReducer, useState } from "react"
import reducer from "./reducer"
import { DISPLAY_ALERT, LOGOUT_USER, TOGGLE_SIDEBAR, CLEAR_ALERT,SETUP_USER_BEGIN,SETUP_USER_SUCCESS,SETUP_USER_ERROR } from "./action"
import axios from "axios"



const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')
//全部之前我要找到看看是否本地有存储的user 
//找本地是否有token，有的话接下来的initial里面就用



const initialState = {
    isLoading:false,
    showAlert:false,
    alertText:"",
    alertType:"",
    user: user ? JSON.parse(user) : null,
    token:token,
    userLocation: userLocation || "",
    jobLocation: userLocation || "",
    showSidebar : false

}

const AppContext = React.createContext()


const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT })
        clearAlert()
    }
    const clearAlert = () =>{
        setTimeout(()=>{
            dispatch({type:CLEAR_ALERT})
        },3000)
        
    }
    const addUserToLocalStorage = ({ user, token, location }) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        localStorage.setItem('location', location)
    }

    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('location')
    }



    const setUpUser = async ({currentUser, endpoint, alertText}) => {
        dispatch({ type: SETUP_USER_BEGIN})
        try {
          const { data } = await axios.post(`/api/v1/auth/${endpoint}`, currentUser)
          const { user, token, location } = data
      
          dispatch({
            type: SETUP_USER_SUCCESS,
            payload: { user, token, location, alertText},
          })
      
          addUserToLocalStorage({ user, token, location })
        } catch (error) {
          dispatch({
            type: SETUP_USER_ERROR,
            payload: { msg: error.response.data.msg },
          })
        }
        clearAlert()
    }

    const toggleSidebar = ()=>{
        dispatch({type:TOGGLE_SIDEBAR})
    }

    const logOut = ()=>{
        dispatch({type:LOGOUT_USER})
        removeUserFromLocalStorage()
    }

    return (
        <AppContext.Provider value = {{...state, displayAlert,setUpUser,toggleSidebar,logOut}}>
            {children}
        </AppContext.Provider>

    )
}
const useAppContext = () =>{
    return useContext(AppContext)
}

export {AppProvider, useAppContext, initialState}
