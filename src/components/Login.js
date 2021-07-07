import LoginForm from './LoginForm';
import CreateUserForm from './CreateUserForm';
import './login.css'
import Api from '../api'
import { useState } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';



export default function Loguin({onReceive}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [formLogin, setFormLogin]= useState(true)

    async function handleGoogleLogIn(){
       let result = await Api.googlePopup()
       if(result){
            onReceive(result.user)
       }else{
           alert("algo nao de certo")
       }
    }

    async function handleFacebookLogIn(){
        let result = await Api.facebookPopUp()
        if(result){
             onReceive(result.user)
        }else{
            alert("algo nao de certo")
        }
     }

     async function handleCreateUserWithEmailAndPassword(event){
        event.preventDefault()
        
        let result = await Api.createUserWithEmailAndPassword(email,password)
        if(result){
            onReceive(result.user, displayName)
        }else{
            alert("algo nao de certo")
        }
     }

     async function handleEmailLogin(event){
        event.preventDefault()
        
        let result = await Api.emailAndPasswordLoguin(email,password)
        if(result){
            onReceive(result.user,displayName)
        }else{
            alert("algo nao de certo")
        }
     }

     function handleShowForm(){
         setFormLogin(!formLogin)
     }

    return(
        <div className='login' >
            <button id="google--btn" onClick={handleGoogleLogIn}>  login com o google</button>
            <button id="facebook--btn" onClick={handleFacebookLogIn}> <FacebookIcon style={{color:'#fff'}}/> login com o facebook</button>
            <h2>Faça o login </h2>
            <p>com email e senha</p>
            {formLogin ? <LoginForm
                setEmail={setEmail} 
                setPassword={setPassword}
                handleEmailLogin={handleEmailLogin}   
                handleShowForm={handleShowForm}
            /> : <CreateUserForm
                setEmail={setEmail} 
                setDisplayName={setDisplayName}
                setPassword={setPassword}
                handleEmailCreateUser={handleCreateUserWithEmailAndPassword}   
                handleShowForm={handleShowForm}
            />}
            
            
        </div>
    )
}