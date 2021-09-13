import '../css/app.css';

function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact_title">
                    <h1 className="font_roboto">Melhore os seus processos de manutenção</h1>
                </div>
                <div className="contact_desc">
                    <p className="font_roboto">
                        Preencha o formulário para uma demonstração.
                    </p>
                </div>
                <div className="contact_card">
                    <form action="#" method="post">
                        <div className="form_group">
                            <label>Nome</label>
                            <input type="text" name="name" id="name" className="contact_input" placeholder="Insira seu nome"></input>
                        </div>
                        <div className="form_group">
                            <label>Cargo</label>
                            <input type="text" name="role" id="role" className="contact_input" placeholder="Insira seu cargo"></input>
                        </div>
                        <div className="row">
                            <div className="form_group col">
                                <label>E-mail profissional</label>
                                <input type="mail" name="mail" id="mail" className="contact_input" placeholder="Insira seu e-mail profissional"></input>
                            </div>
                            <div className="form_group col_4">
                                <label>Telefone</label>
                                <input type="text" name="role" id="role" className="contact_input" placeholder="(xx) xxxx-xxxx"></input>
                            </div>
                        </div>
                        <div className="form_group">
                            <label>Quantidade de pontos monitorados</label>
                            <div className="row">
                                <div className="form_group radio_inp">
                                    <input type="radio" id="1" name="pontos"></input>
                                    <label>10 a 20</label>
                                </div>
                                <div className="form_group radio_inp">
                                    <input type="radio" id="1" name="pontos"></input>
                                    <label>21 a 30</label>
                                </div>
                                <div className="form_group radio_inp">
                                    <input type="radio" id="1" name="pontos"></input>
                                    <label>31 a 50</label>
                                </div>
                                <div className="form_group radio_inp">
                                    <input type="radio" id="1" name="pontos"></input>
                                    <label>Mais de 50</label>
                                </div>  
                            </div>
                        </div>
                        <a type="submit" className="btn btn_block">Enviar</a>
                    </form>
                </div>
            </div>
        </section>
    );
  }
  
  export default Contact;