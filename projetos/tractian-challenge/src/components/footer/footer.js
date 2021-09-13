import '../css/app.css';
import Logo from "../images/logo-tractian.svg";

function Footer() {
    return (
        <section id="footer">
            <div className="container">
                <div className="logo">
                    <img src={Logo}></img>
                </div>
                <div className="socials">
                    <div className="socials_title">
                        <h1 className="font_roboto">Siga-nos</h1>
                    </div>
                    <div className="social_icons">
                        <div className="social_icon">
                            <a href="#"><i class="bi bi-linkedin"></i></a>
                        </div>
                        <div className="social_icon">
                            <a href="#"><i class="bi bi-facebook"></i></a>
                        </div>
                        <div className="social_icon">
                            <a href="#"><i class="bi bi-instagram"></i></a>
                        </div>
                        <div className="social_icon">
                            <a href="#"><i class="bi bi-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default Footer;