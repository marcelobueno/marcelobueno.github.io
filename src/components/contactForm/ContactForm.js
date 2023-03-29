import React from 'react'
import { Container } from 'reactstrap'
import { ButtonFill } from '../buttons/ButtonFill'

export const ContactForm = () => {
    return (
        <Container className='my-3'>
            <div className="text-center d-flex flex-column align-items-center justify-content-center">
                <h2>Entre em contato</h2>
                <div className="my-3 form_contact_area">
                    <div className="row text-align-start">
                        <div className="col col-6">
                            <label htmlFor="" className='fw-bold text-dark-blue w-100'>
                                <span>Nome</span>
                                <input 
                                    type="text" 
                                    className='form-control border-primary shadow-sm' 
                                    placeholder='Digite seu nome' />
                            </label>
                        </div>
                        <div className="col col-6">
                            <label htmlFor="" className='fw-bold text-dark-blue w-100'>
                                <span>E-mail</span>
                                <input 
                                    type="email" 
                                    className='form-control border-primary shadow-sm' 
                                    placeholder='Digite seu e-mail' />
                            </label>
                        </div>
                    </div>
                    <div className="row my-3 text-align-start">
                        <div className="col col-6">
                            <label htmlFor="" className='fw-bold text-dark-blue w-100'>
                                <span>Telefone</span>
                                <input 
                                    type="tel" 
                                    className='form-control border-primary shadow-sm' 
                                    placeholder='(XX) XXXX-XXXX' />
                            </label>
                        </div>
                        <div className="col col-6">
                            <label htmlFor="" className='fw-bold text-dark-blue w-100'>
                                <span>Celular</span>
                                <input 
                                    type="tel" 
                                    className='form-control border-primary shadow-sm' 
                                    placeholder='(XX) XXXXX-XXXX' />
                            </label>
                        </div>
                    </div>
                    <label htmlFor="" className='fw-bold text-dark-blue w-100 text-align-start'>
                        <span>Mensagem</span>
                        <textarea 
                            maxLength={1000} 
                            className='form-control border-primary shadow-sm' 
                            rows={6}
                            placeholder='Digite sua mensagem' ></textarea>
                    </label>
                    <div className="d-flex align-items-center justify-content-end mt-2">
                        <ButtonFill customClass='shadow' title={'Enviar'} />
                    </div>
                </div>
            </div>
        </Container>
    )
}
