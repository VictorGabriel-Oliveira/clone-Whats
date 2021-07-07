import './loginForm.css'
export default function LoginForm ({setEmail,setPassword,handleEmailLogin,handleShowForm}){
    return(
        <div className="login--form">
            <form onSubmit={handleEmailLogin}>
                <input id="email" name="email" type="text" placeholder="digite seu email" onChange={event =>{setEmail(event.target.value)}} />
                <input id="password" name="password" type="password" placeholder="digite sua senha" onChange={event=>{ setPassword(event.target.value)}} />
                <button id="submit--btn" type="submit"> Confirmar </button>
            </form>
            <strong>não tem uma conta <button onClick={handleShowForm} id="form--btn">clique aqui</button> e cadastre-se</strong>
        </div>
    
    )
}