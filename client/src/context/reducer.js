import { DISPLAY_ALERT, LOGOUT_USER, TOGGLE_SIDEBAR, CLEAR_ALERT, SETUP_USER_BEGIN,SETUP_USER_SUCCESS,SETUP_USER_ERROR } from "./action"
import { initialState } from "./appContext"

const reducer = (state, action) =>{
    if(action.type === DISPLAY_ALERT){
        return{
            ...state,
            showAlert:true,
            alertText:"You should fill up all the input!",
            alertType:"danger",

        }
    
    }
    if(action.type === CLEAR_ALERT){
        return{
            ...state,
            showAlert:false,
            alertText:"",
            alertType:""
        }
    }

    if(action.type ===SETUP_USER_BEGIN){
        return{
            ...state,
            isLoading:true
        }
    }
    if(action.type === SETUP_USER_SUCCESS){
        return{
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          userLocation: action.payload.location,
          jobLocation: action.payload.location,
          isLoading: false,
          showAlert: true,
          alertType: 'success',
          alertText: action.payload.alertText,
        }

    }
    if(action.type === SETUP_USER_ERROR){
        return{
            ...state,
            isLoading:false,
            showAlert:true,
            alertText: action.payload.msg,
            alertType: "danger"
        }
    }
    if (action.type === TOGGLE_SIDEBAR){
        return{
            ...state,
            showSidebar: !state.showSidebar
        }
    }
    if(action.type === LOGOUT_USER){
        return {
            ...initialState,
            user: null,
            token: null,
            userLocation: "",
            jobLocation: "",
        }
    }

    throw new Error(`no such action :${action.type}`)
}



export default reducer