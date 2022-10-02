import "../styles/ReviewPage.css";
import stars from '../images/stars.png'

const ReviewPage = () => {
  return (
    
    <body className="fondo">
        <div className="menu">MENU</div>
        <div className="bg-light bloqueReview">
            <div className="head1Review">
                <h1>User Reviews</h1>
            </div>
            <div >
                <h4 className="globalRate">Global Rate</h4>
                <span><img className="estrellas" src={stars}></img></span>
            </div>
            <hr></hr>
            <div className="comentario">
                <h4>Juan Lopez</h4>
                <p className="textoComentario">I completely recomend this service</p>
            </div>
            <hr></hr>
            <div className="comentario">
                <h4>Jhon Doe</h4>
                <p className="textoComentario">Great service</p>
            </div>
            <hr></hr>
            <div className="comentario">
                <h4>Carl Johnson</h4>
                <p className="textoComentario">Pc well builded and nice case quality</p>
            </div>
        </div>
    </body>
  );
};

export default ReviewPage;
