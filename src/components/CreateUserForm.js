import './createUserForm.css'
export default function CreateUserForm ({ setEmail,setDisplayName, setPassword,handleEmailCreateUser , handleShowForm}){
   return(
    <div className="createUserForm">
        <form onSubmit={handleEmailCreateUser}>
            <input id="email" name="email" type="text" placeholder="digite seu email" onChange={event =>{setEmail(event.target.value)}} />
            <input id="DisplayName" name="DisplayName" type="text" placeholder="digite seu Nome" onChange={event =>{setDisplayName(event.target.value)}} />
            <input id="password" name="password" type="password" placeholder="digite sua senha" onChange={event=>{ setPassword(event.target.value)}} />
            <button id="submit--btn" type="submit"> Confirmar </button>
        </form>
        <strong>Já tem uma conta ? <button onClick={handleShowForm} id="form--btn">clique aqui</button> e faça o login</strong>
    </div>
   )

    
}