import '../css/app.css';
import Logo from "../images/logo-tractian.svg";

function Home() {
    return (
        <section id="top">
            <header>
                <nav>
                    <div className="container">
                        <div className="logo">
                            <img src={Logo}></img>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="main_title">
                <div className="container">
                    <div className="header_title">
                        <h1 className="font_roboto">
                            Monitoramento inteligente Tractian
                        </h1>
                    </div>
                    <div className="header_desc">
                        <p className="font_noto">
                            Com o sistema de monitoramento inteligente da Tractian, você receberá 
                            insights valiosos que o ajudarão a prevenir incidentes.
                        </p>
                    </div>
                    <div className="header_button">
                        <a href="#" className="btn">Demonstração</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
  
export default Home;