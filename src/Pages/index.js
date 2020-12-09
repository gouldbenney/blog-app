import React from 'react'
const Login = React.lazy(()=> import('./LoginPage'))
const SignUp = React.lazy(()=> import('./SignUpPage'))
const Post = React.lazy(()=> import('./Post'))

const Pages = {
    Login,
    SignUp,
    Post
}
 
export default Pages 