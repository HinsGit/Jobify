import { useState, useEffect} from 'react'
import { Logo,FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'



const initialstate = {
    name : "",
    email : "",
    password : '',
    isMember : true,
}
const Register = () => {
    const [values, SetValues] =  useState(initialstate) //global state and useNavigate
    const {isLoading, showAlert, displayAlert, user, setUpUser} =
    useAppContext()
    const toggleMember = () => {
        SetValues({ ...values, isMember: !values.isMember })
    }
    const navigate = useNavigate()

    useEffect(()=>{
        if(user){
            setTimeout(() => {
                navigate("/")
            }, 3000);
            console.log(user.name)
        }
    
    },[user,navigate]) //Once the user state change will invoke the re-render

  

    const onSubmit = (e) => {
        e.preventDefault()
        const { name, email, password, isMember } = values
        if (!email || !password || (!isMember && !name)) {
          displayAlert()
          return
        }
        // check whether the state are all fill?
        const currentUser = { name, email, password }
        // get user information
        if(isMember){
            setUpUser({currentUser, endpoint:"login", alertText:"Login Success! Redirecting..."})
        }
        else{
            setUpUser({currentUser,endpoint:"register", alertText:"User Created! Redirecting..."})
        }
        // register user
  
    }
    const handleChange = (e) =>{
        SetValues({...values, [e.target.name] : e.target.value})
    }

    return (
        <Wrapper className="full-page">
            <form className='form' onSubmit={onSubmit}>
                <Logo/>
                <h3>{values.isMember? "Login" : "Register"}</h3>
                {showAlert && <Alert/>}
                {values.isMember?
                <div>
                    <FormRow type = "email" name = "email" value = {values.email} handleChange ={handleChange}/>
                    <FormRow type = "password" name = "password" value = {values.password} handleChange ={handleChange}/>
                </div>:
                <div>
                    <FormRow type = "text" name = "name" value = {values.name} handleChange ={handleChange}/>
                    <FormRow type = "email" name = "email" value = {values.email} handleChange ={handleChange}/>
                    <FormRow type = "password" name = "password" value = {values.password} handleChange ={handleChange}/>
                </div>
                }
                
                    
                
             
                <button type='submit' className='btn btn-block' disabled={isLoading}>
                    submit
                </button>
                <div>
                <p>
                    {values.isMember?'Not a member yet?':'Already a member?'}
                    <button type='button' onClick={toggleMember} className='member-btn'>{values.isMember?"Register":"Login"}</button>
                </p>
            </div>
            </form>
           
        </Wrapper>
    )
}

export default Register
