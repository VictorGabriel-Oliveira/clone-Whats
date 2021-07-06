import './login.css'
import Api from '../api'
import { useState } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';



export default function Loguin({onReceive}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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

     async function handleEmailLogin(event){
        event.preventDefault()
        let result = await Api.emailAndPasswordLoguin(email,password)
        if(result){
            onReceive(result.user)
        }else{
            alert("algo nao de certo")
        }
     }

    return(
        <div className='login' >
            <button id="google--btn" onClick={handleGoogleLogIn}>  login com o google</button>
            <button id="facebook--btn" onClick={handleFacebookLogIn}> <FacebookIcon style={{color:'#fff'}}/> login com o facebook</button>
            <h2>Faça o login </h2>
            <p>com email e senha</p>
            <form onSubmit={handleEmailLogin}>
                <input id="email" name="email" type="text" placeholder="digite seu email" onChange={event =>{setEmail(event.target.value)}} value={email}/>
                <input id="password" name="password" type="password" placeholder="digite sua senha" onChange={event=>{ setPassword(event.target.value)}} value={password}/>
                <button id="submit--btn" type="submit"> Confirmar </button>
            </form>
            
        </div>
    )
}