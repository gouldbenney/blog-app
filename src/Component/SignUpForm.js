import React from 'react';
import '../Styles/Auth.css'

function SignUpForm(){
        const handlesignup = () =>{
            alert(':) Sign Up Successful!')
        }
    
    return(
    <div className='auth-container'>
        <h1>SignUp</h1>

        <form className='auth-input'>
            <label>First Name</label>
                <br/>
            <input type='First Name' placeholder= 'Gould'/>
                <br/>
            <label>Last Name</label>
                <br/>
            <input type='Last Name' placeholder= 'Benney'/>
                <br/>
            <label>Email</label>
                <br/>
            <input type='Email' placeholder= 'gould@gmail.com'/>
                <br/>
            <label>Password</label>
                <br/>
            <input type='Password' placeholder= '*************'/>
                <br/>
            <label>Confirm Password</label>
                <br/>
            <input type='Confirm Password' placeholder= '**************' /> 
                <br/>   
            <button className= 'btn' onClick = {handlesignup}> SignUp</button>
        </form>
    </div>
    )

}

export default SignUpForm
