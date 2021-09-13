import '../css/app.css';

function Action() {
    return (
        <section id="action">
            <div className="container collumn">
                <div className="action_title">
                    <h1 className="font_roboto">Indústrias inteligentes usam tractian</h1>
                </div>
                <div className="action_desc">
                    <h2 className="font_roboto">Através do monitoramento da Tractian é possível:</h2>
                </div>
                <div className="action_cards">
                    <div className="action_card collumn">
                        <div className="card_desc">
                            Reduzir em até <b>60%</b> o custo de manutenção
                        </div>
                        <div className="card_info">
                            <i class="bi bi-caret-down-fill text_green"></i> 60%
                        </div>
                    </div>
                    <div className="action_card collumn">
                        <div className="card_desc">
                            Aumentar em até <b>50%</b> o uptime da sua máquina
                        </div>
                        <div className="card_info">
                            <i class="bi bi-caret-up-fill text_green"></i> 50%
                        </div>
                    </div>
                    <div className="action_card collumn">
                        <div className="card_desc">
                            Reduzir em até <b>55%</b> o número de quebras inesperadas
                        </div>
                        <div className="card_info">
                            <i class="bi bi-caret-down-fill text_green"></i> 55%
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default Action;