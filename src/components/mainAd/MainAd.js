import React, { useEffect, useState } from "react";
import avatar from "../../assets/img/avatar.webp";
import logo from "../../assets/img/logo_portfolio.png";
import { ButtonFill } from "../../components/buttons/ButtonFill";
import { Container } from "reactstrap";

export const MainAd = () => {
  /* const [mobileScreen, setMobileScreen] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 720) {
            setMobileScreen(true);
        }
    }, []); */

  return (
    <>
      <div className="spacer"></div>
      <Container className="d-flex mt-2 mb-5 h-100 pt-3 pb-2 gap-5 mobile_responsiviness_reverse">
        <div className="d-flex flex-column align-items-start justify-content-center">
          <img src={logo} width={400} alt="" />
          <h1>Desenvolvedor de sistemas</h1>
          <p className="text-muted" id="sobre_mim">
            Graduado em Tecnologia em Segurança da Informação pela Universidade
            Nove de Julho, com mais de cinco anos de experiência como
            desenvolvedor de sistemas. Especializado em diversas áreas,
            incluindo backend, frontend, banco de dados, UI/UX e DevOps.
            Possuo um histórico comprovado no desenvolvimento de softwares que otimizam
            processos e agregam valor às empresas.  <br /> <br /> Experiente em tecnologias em
            nuvem, como AWS, GCP e Azure, utilizando Docker para a implantação
            de aplicações. Além disso, atuei como líder técnico, liderando uma
            equipe multidisciplinar em projetos complexos. Também tive a
            oportunidade de liderar o setor de tecnologia, implementando a
            transformação digital, contratando novos fornecedores e migrando
            servidores para a nuvem, resultando em uma redução de custos de 30%.
            <br /><br />
            Estou buscando oportunidades desafiadoras onde eu possa aplicar
            minha experiência diversificada e liderança técnica para impulsionar
            o crescimento e a inovação dentro de uma organização.
          </p>
          {/* <div className="subscribe-field">
            <i className="bi bi-envelope"></i>
            <input type="email" placeholder="Digite seu email" />
            <ButtonFill title={"Solicitar contato"} />
          </div> */}
        </div>
        <div
          id="avatar_area"
          className={`d-flex align-items-center justify-content-center`}
        >
          <img src={avatar} width={500} alt="" />
        </div>
      </Container>
    </>
  );
};
