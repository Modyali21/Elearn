import React from 'react'
import { useRef,useState } from 'react'
import {signup,useAuth,logout,login} from "../firebase"
import {ProfileImage} from  "./ProfileImage"

export const Signup = () => {
    const [loading,setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const currentUser = useAuth();

    async function handleSignup(){
        setLoading(true);
        try{
            await signup(emailRef.current.value,passwordRef.current.value);
        }
        catch{
            alert("The email is already present");
        }
        setLoading(false);
    }
    async function handleLogin(){
        setLoading(true);
        try{
            await login(emailRef.current.value,passwordRef.current.value);
        }
        catch{
            alert("The email is already present");
        }
        setLoading(false);
    }
    async function handleLogOut(){
        setLoading(true)
        await logout();
        setLoading(false)
    }

    return (
        <div>
            {!currentUser &&
            <>
                <div><h1>{currentUser?.email}</h1></div>
                <input ref = {emailRef} type='text' placeholder='Email'/>
                <input ref = {passwordRef} type='password' placeholder='Password'/>
                <input disabled={loading || currentUser} onClick={handleSignup} type='submit' value='Signup'/>
                <input disabled={loading || currentUser} onClick={handleLogin} type='submit' value='login'/>
            </>
            
            }            
            {currentUser && <ProfileImage/>}
            <input disabled={loading || !currentUser} onClick={handleLogOut} type='submit' value='logout'/>
        </div>
    
    
    
    )
}
