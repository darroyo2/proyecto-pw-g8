import "../styles/Ranking2Page.css";
import i1 from "../img/download.JPG"
import i2 from "../img/heart.JPG"
import i3 from "../img/share.JPG"
import i4 from "../img/dots.JPG"
import i5 from "../img/1.jpg"
import i6 from "../img/2.jpg"
import i7 from "../img/3.jpg"
import i8 from "../img/4.jpg"
import i9 from "../img/5.jpg" 
import i10 from "../img/6.jpg" 
import i11 from "../img/7.JPG" 
import i12 from "../img/8.JPG" 

const ComprashistoricasPage = () => {
	
    return (
        <body class="b">
	<h1 class="h">Compras historicas</h1>
	<div class="contentlist">
	<div class="layerlist">
			<h2>ID ordencompra_01</h2>
			<div class="pcparts">
				<h4>Pantalla pc</h4>
				<h5>$59</h5>
			</div>
			<img class="i" src={i8} alt="imageAlbum"/>
			<div class="optionslist">
				<img class="d" src={i1} alt="download"/>
				<img class="d" src={i2} alt="heart"/>
				<img class="d" src={i3} alt="share"/>
				<img class="d" src={i4} alt="dots"/>
			</div>
		</div>	
    <div class="layerlist">
			<h2>ID ordencompra_01</h2>
			<div class="pcparts">
				<h4>CPU box</h4>
				<h5>$49</h5>
			</div>
			<img class="i" src={i9} alt="imageAlbum"/>
			<div class="optionslist">
				<img class="d" src={i1} alt="download"/>
				<img class="d" src={i2} alt="heart"/>
				<img class="d" src={i3} alt="share"/>
				<img class="d" src={i4} alt="dots"/>
			</div>
		</div>
		<div class="layerlist">
			<h2>ID ordencompra_01</h2>
			<div class="pcparts">
				<h4>Ventilador PC</h4>
				<h5>$39</h5>
			</div>
			<img class="i" src={i10} alt="imageAlbum"/>
			<div class="optionslist">
				<img class="d" src={i1} alt="download"/>
				<img class="d" src={i2} alt="heart"/>
				<img class="d" src={i3} alt="share"/>
				<img class="d" src={i4} alt="dots"/>
			</div>
		</div>
		<div class="layerlist">
			<h2>ID ordencompra_02</h2>
			<div class="pcparts">
				<h4>Camara web</h4>
				<h5>$29</h5>
			</div>
			<img class="i" src={i11} alt="imageAlbum"/>
			<div class="optionslist">
				<img class="d" src={i1} alt="download"/>
				<img class="d" src={i2} alt="heart"/>
				<img class="d" src={i3} alt="share"/>
				<img class="d" src={i4} alt="dots"/>
			</div>
		</div>
		<div class="layerlist">
			<h2>ID ordencompra_02</h2>
			<div class="pcparts">
				<h4>Mouse gamer</h4>
				<h5>$19</h5>
			</div>
			<img class="i" src={i12} alt="imageAlbum"/>
			<div class="optionslist">
				<img class="d" src={i1} alt="download"/>
				<img class="d" src={i2} alt="heart"/>
				<img class="d" src={i3} alt="share"/>
				<img class="d" src={i4} alt="dots"/>
			</div>
		</div>
	</div>
</body>

    );
    };
    export default ComprashistoricasPage;