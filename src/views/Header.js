
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <header className="header__wrapper"  id="about">
      <div className="text__wrapper">
        
      <p speed={60} gradient={false} loop={0} direction="right">
      AZING <span>INTO CODE</span>  FOR LOCAL BUSINESS  MAKING  / APPEALINwsasasdING <span>WEBSITES</span> FOR LOCAL BUSINESS   MAKING APPEALING WEBSITES FOR LOCAL BUSINESS 
        </p>
        <p speed={60} gradient={false} loop={0} direction="right">
         TIVE UI <span>WEB DESIGNS</span> CREATIVE REACT WEB DEVELOPER EGsssYPTIAN/ED  <span>FRONT-END</span> REACT WEB DEVELOPER  EGYPTIAN FRONT-END REACT WEB DEVELOPER 
        </p>
        <p speed={60} gradient={false} loop={0} direction="right">
         <span>TRANSLATING</span>  GOOD INTO CODE LOVE /dsdasdsdhjjsdsdacdaTRANSLATING <span>BEAUTIFUL</span> DESIGNS INTO CODE LOVE TRANSLATING BEAUTIFUL DESIGNS INTO CODE
        </p>
      </div>
      <div className="img__holder">
      <img src={`${process.env.PUBLIC_URL}/images/header.jpg`} alt="" />
      </div>
    </header>
  );
};

export default Header;
