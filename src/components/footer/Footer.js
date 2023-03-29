import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import logo from '../../assets/img/logo_portfolio.webp'

export const Footer = () => {
    return (
        <footer className='up-shadow py-5 mt-5'>
            <Container>
                <div className="d-flex justify-content-between mobile_responsiviness">
                    <img src={logo} height={120} alt="" />
                    <div className='d-flex gap-5 mobile_responsiviness'>
                        <div>
                            <h4>Projetos</h4>
                            <div className="d-flex flex-column">
                                <Link to={''} className='text-decoration-none text-dark'>
                                    <i className="bi bi-code-slash me-2"></i>
                                    Agenda
                                </Link>
                                <Link to={''} className='text-decoration-none text-dark mt-2'>
                                    <i className="bi bi-code-slash me-2"></i>
                                    Lista de compras
                                </Link>
                                <Link to={''} className='text-decoration-none text-dark mt-2'>
                                    <i className="bi bi-code-slash me-2"></i>
                                    E-commerce
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h4>Contatos</h4>
                            <div className="d-flex flex-column">
                                <a
                                    className='text-decoration-none text-dark'
                                    href="mailto:marcelo.f.bueno@hotmail.com"
                                    rel='noopener norefer'
                                    target={'_blank'}>
                                    <i className="bi bi-envelope-at-fill me-2"></i>
                                    marcelo.f.bueno@hotmail.com
                                </a>
                                <a
                                    className='text-decoration-none text-dark mt-2'
                                    href="tel:+5511982702962"
                                    rel='noopener norefer'
                                    target={'_blank'}>
                                    <i className="bi bi-phone-vibrate-fill me-2"></i>
                                    +55 11 98270-2962
                                </a>
                                <a
                                    className='text-decoration-none text-dark mt-2'
                                    href="https://wa.me/5511982702962"
                                    rel='noopener norefer'
                                    target={'_blank'}>
                                    <i className="bi bi-whatsapp me-2"></i>
                                    Contato WhatsApp
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4>Minhas redes sociais</h4>
                            <div className="d-flex flex-column">
                                <a
                                    className='text-decoration-none text-dark'
                                    href="https://www.linkedin.com/in/marcelofbueno/"
                                    rel='noopener norefer'
                                    target={'_blank'}>
                                    <i className="bi bi-linkedin me-2"></i>
                                    linkedin.com/in/marcelofbueno/
                                </a>
                                <a
                                    className='text-decoration-none text-dark mt-2'
                                    href="https://www.instagram.com/marcelobuenodev/"
                                    rel='noopener norefer'
                                    target={'_blank'}>
                                    <i className="bi bi-instagram me-2"></i>
                                    instagram.com/marcelobuenodev
                                </a>
                                <a
                                    className='text-decoration-none text-dark mt-2'
                                    href="https://github.com/marcelobueno"
                                    rel='noopener norefer'
                                    target={'_blank'}>
                                    <i className="bi bi-github me-2"></i>
                                    github.com/marcelobueno
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
