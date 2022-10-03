import "../styles/RegisterSignInPage.css";

const SignInPage = () => {
    return <div>
        <body className="bodyregistro">
	        <form className="formulario">
                <h4 clasName="tituloregistro">Iniciar Sesion</h4>
                <input className="controls input_iniciosesion" type="email" required name="correo" id="correo" placeholder="Ingrese su Correo"/>
                <input className="controls input_iniciosesion" type="password" required name="contraseña" id="contraseña" placeholder="Ingrese su Contraseña"/>
                <button className="botonregistro">Iniciar Sesion</button>
                <p className="link"><a href="#">¿Aún no has creado tu cuenta?</a></p> 
	        </form>
        </body>
    </div>
}

export default SignInPage;