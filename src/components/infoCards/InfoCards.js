import React from 'react'
import { Container } from 'reactstrap'
import frontend from '../../assets/img/services/frontend.webp'
import backend from '../../assets/img/services/backend.webp'
import institucionals from '../../assets/img/services/institucionals.webp'
import ondemand from '../../assets/img/services/ondemand.webp'

export const InfoCards = () => {
    return (
        <Container className='my-3'>
            <div className="text-center my-3">
                <h2>Serviços que realizo</h2>
                <div className="d-flex gap-5 w-100 align-items-center justify-content-between py-5 mobile_responsiviness">
                    <div className={`card info-card shadow w-100 pb-3 text-center`}>
                        <img src={frontend} alt="" />
                        <h6 className='fw-bold'>Frontend</h6>
                        <span className='text-muted'>
                            Desenvolvimento de interfaces para sites e sistemas. Design de UI/UX.
                        </span>
                    </div>
                    <div className={`card info-card shadow w-100 pb-3 text-center`}>
                        <img src={backend} alt="" />
                        <h6 className='fw-bold'>Backend</h6>
                        <span className='text-muted'>
                            Desenvolvimento de lógica e regras de negócio para seus sistemas.
                        </span>
                    </div>
                    <div className={`card info-card shadow w-100 pb-3 text-center`}>
                        <img src={institucionals} alt="" />
                        <h6 className='fw-bold'>Sites institucionais</h6>
                        <span className='text-muted'>
                            Desenvolvimento de site institucional e construção de imagem empresarial.
                        </span>
                    </div>
                    <div className={`card info-card shadow w-100 pb-3 text-center`}>
                        <img src={ondemand} alt="" />
                        <h6 className='fw-bold'>Sistemas sob-demanda</h6>
                        <span className='text-muted'>
                            Desenvolvimento de sistemas completos sob-demanda.
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    )
}
