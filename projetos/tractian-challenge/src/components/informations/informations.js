import '../css/app.css';

function Informations() {
    return (
        <section id="informations">
            <div className="container collumn">
                <div className="information_title">
                    <h1 className="font_roboto">Suas máquinas mais seguras!</h1>
                </div>
                <div className="information_cards">
                    <div className="information_card">
                        <div className="information_card_title">
                            Assertividade dos insights gerados pela plataforma.
                        </div>
                        <div className="information_card_desc">
                            90%
                        </div>
                    </div>
                    <div className="information_card">
                        <div className="information_card_title">
                            Aumento de confiabilidade das máquinas com sistema tractian.
                        </div>
                        <div className="information_card_desc">
                            45%
                        </div>
                    </div>
                    <div className="information_card">
                        <div className="information_card_title">
                            Redução das ocorrências de última hora na manutenção.
                        </div>
                        <div className="information_card_desc">
                            30%
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default Informations;