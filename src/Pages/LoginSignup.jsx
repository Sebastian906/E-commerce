import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async () => {
        console.log("Función de Logeado ejecutada.",formData);
    }

    const signup = async () => {
        console.log("Funcion de Registro ejecutada.",formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data)

        if(responseData) {
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }

    }

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="Registro"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Su Nombre' />:<></>}
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Dirección de Correo' />
                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Contraseña' />
                </div>
                <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
                {state==="Registro"?<p className="loginsignup-login">Ya tiene una Cuenta? <span onClick={()=>{setState("Login")}}>Conectese Aquí!</span></p>
                :<p className="loginsignup-login">Crear una Cuenta? <span onClick={()=>{setState("Registro")}}>Registrese Aquí!</span></p>}
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>Al continuar, Está aceptando nuestros términos de uso y política de privacidad.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup