import "../styles/RegisterSignInPage.css";

const RegisterPage = () => {
    return <div>
        <body className="bodyregistro">
	        <form className="formulario">
		        <h4 clasName="tituloregistro">Formulario de Registro</h4>
                <input className="controls input_iniciosesion" type="text" required name="nombre" id="nombre" placeholder="Ingrese su Nombre"/>
                <input className="controls input_iniciosesion" type="text" required name="apellido" id="apellido" placeholder="Ingrese su Apellido"/>
                <input className="controls input_iniciosesion" type="email" required name="correo" id="correo" placeholder="Ingrese un Correo"/>
                <input className="controls input_iniciosesion" type="password" required name="contraseña" id="contraseña" placeholder="Ingrese una Contraseña"/>
                <p className="acuerdo">Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
                <button className="botonregistro">Registrarse</button>
                <p className="link"><a href="#">¿Ya tienes una cuenta?</a></p> 
	        </form>
        </body>
    </div>
}

export default RegisterPage;    