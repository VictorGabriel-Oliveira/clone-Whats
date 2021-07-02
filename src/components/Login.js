import './login.css'
import Api from '../api'

export default function Loguin({onReceive}){

    async function handleFacebookLogIn(){
       let result = await Api.googlePopup()
       if(result){
            onReceive(result.user)
       }else{
           alert("algo nao de certo")
       }
    }

    return(
        <div className='login' >
            <button onClick={handleFacebookLogIn}>login com o google</button>
        </div>
    )
}