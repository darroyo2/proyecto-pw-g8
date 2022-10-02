import "../styles/InfluencersPage.css";
import iconotop5 from "../images/mrtop5.jpg"
import iconoshortcircuit from "../images/shortcircuit.jpg"

const InfluencersPage = () => {
  return (
    <body className="fondo">
      <div className="menu">MENU</div>
      <div className="bg-light">
        <h1 className="head1Influencers">Influencers</h1>
        <div>
          <iframe className="videoemb"
            src="https://www.youtube.com/embed/4vpPJb392Vg"
          ></iframe>
               <iframe className="videoemb"
            src="https://www.youtube.com/embed/UhO7MLntkDE"
          ></iframe>
          <div>
             </div>
          <div>
            <img className="iconoInf" src={iconotop5}></img>
            <div className=" container-fluid descriptionInf">
              <div className="nameInf"> MR TOP 5</div>
              <div className="redline"></div>
              Thanks to @MrTop5 for showing off the unboxing of the #BuildRedux PC! Check
              out his video to see his PC and setup!
              <span></span>
              <img className="iconoInf" src={iconoshortcircuit}></img>
              <div display="flex">
                <h4>MR TOP 5</h4>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </body>
  );
};

export default InfluencersPage;
