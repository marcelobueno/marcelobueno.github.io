import React, { useEffect, useState } from 'react'
import avatar from '../../assets/img/avatar.png'
import logo from '../../assets/img/logo_portfolio.png'
import { ButtonFill } from '../../components/buttons/ButtonFill'
import { Container } from 'reactstrap'

export const MainAd = () => {

    /* const [mobileScreen, setMobileScreen] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 720) {
            setMobileScreen(true);
        }
    }, []); */

    return (
        <>
            <div className='spacer'></div>
            <Container className='d-flex mt-2 mb-5 h-100 pt-3 pb-2 gap-5 mobile_responsiviness_reverse'>
                <div className="d-flex flex-column align-items-start justify-content-center">
                    <img src={logo} width={400} alt="" />
                    <h1>Desenvolvedor de sistemas</h1>
                    <p className="text-muted">
                        Trabalho como Desenvolvedor de sistemas desde 2019 e nesses anos tive a oportunidade de construir junto
                        de meus parceiros e clientes, soluções que agregam e beneficiam a rotina de trabalho de seus
                        colaboradores e clientes, prezando sempre pela qualidade e segurança das aplicações.
                    </p>
                    <div className='subscribe-field'>
                        <i className="bi bi-envelope"></i>
                        <input type="email" placeholder='Digite seu email' />
                        <ButtonFill title={'Solicitar contato'} />
                    </div>

                </div>
                <div id='avatar_area' className={`d-flex align-items-center justify-content-center`}>
                    <img src={avatar} width={500} alt="" />
                </div>
            </Container>
        </>
    )
}
