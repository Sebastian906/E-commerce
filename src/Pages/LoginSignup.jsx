import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Registrese</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Su Nombre' />
                    <input type="email" placeholder='Dirección de Correo' />
                    <input type="password" placeholder='Contraseña' />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Ya tiene una Cuenta? <span>Conectese Aquí!</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>Al continuar, Está aceptando nuestros términos de uso y política de privacidad.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup