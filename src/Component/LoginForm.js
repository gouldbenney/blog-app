import React, {useState} from 'react';
import '../Styles/Auth.css'


function LoginForm(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailOnChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordOnChange = (event) => {
        setPassword(event.target.value)
    }
    const handleOnSubmitLoginForm = (event) => {
        event.preventDefault();
    
    if (email === password) {
        localStorage.setItem('IsAuthenticated','true')
        alert('Login Successful')
    } else{
        alert('Invalid Login')
    }
    }
    
    return(
        <div className='auth-container'>
        <div  className = 'head'>
             <h1>Agents of Change - The Blog</h1>
             <br/>
             <h1>Login</h1>
        </div>
        <form className='auth-input' onSubmit={handleOnSubmitLoginForm}>
             <label>Email</label>
                <br/>   
             <input type='email' placeholder= 'Please enter your email' value={email} onChange={handleEmailOnChange}/>
                <br/>
             <label>Password</label>
                <br/>
             <input type='password' placeholder= 'Please enter your password' value={password} onChange={handlePasswordOnChange}/>
                <br/>
             <button className= 'btn'> Login </button>
        </form>
        </div>

    )
}

export default LoginForm;
