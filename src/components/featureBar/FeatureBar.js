import React, { useState } from 'react'
import { Container, Progress, Tooltip } from 'reactstrap'
import php from '../../assets/img/icons/php.svg'
import laravel from '../../assets/img/icons/laravel.svg'
import javascript from '../../assets/img/icons/javascript.svg'
import nodejs from '../../assets/img/icons/nodejs.svg'
import iconreact from '../../assets/img/icons/react.svg'
import vue from '../../assets/img/icons/vue.svg'
import jquery from '../../assets/img/icons/jquery.svg'
import mysql from '../../assets/img/icons/mysql.svg'
import postgresql from '../../assets/img/icons/postgresql.svg'
import csharp from '../../assets/img/icons/csharp.svg'
import python from '../../assets/img/icons/python.svg'
import bootstrap from '../../assets/img/icons/bootstrap.svg'


export const FeatureBar = () => {

    return (
        <>
            <Container>
                <div className="text-center">
                    <h2 className='mt-3 mb-4'>Habilidades</h2>
                </div>
                <div className="d-flex gap-2 mobile_responsiviness">
                    <div className="d-flex flex-column w-100 gap-3">
                        <div className="ability">
                            <img src={php} width={40} alt="" />
                            <div className='w-100'>
                                <Progress animated value={90} style={{height: '10px'}} color={'info'} />
                            </div>
                        </div>
                        <div className="ability">
                            <img src={laravel} width={40} alt="" />
                            <div className='w-100'>
                                <Progress animated value={90} style={{height: '10px'}} color={'info'} />
                            </div>
                        </div>
                        <div className="ability">
                            <img src={jquery} width={40} alt="" />
                            <div className='w-100'>
                                <Progress animated value={100} style={{height: '10px'}} color={'info'} />
                            </div>
                        </div>
                        <div className="ability">
                            <img src={javascript} width={40} alt="" />
                            <div className='w-100'>
                                <Progress animated value={100} style={{height: '10px'}} color={'info'} />
                            </div>
                        </div>
                        <div className="ability">
                            <img src={nodejs} width={40} alt="" />
                            <div className='w-100'>
                                <Progress animated value={80} style={{height: '10px'}} color={'info'} />
                            </div>
                        </div>
                        <div className="ability">
                            <img src={iconreact} width={40} alt="" />
                            <div className='w-100'>
                                <Progress animated value={90} style={{height: '10px'}} color={'info'} />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column w-100 gap-3">
                        <div className="ability">
                            <img src={vue} width={40} alt="" />
                            <div className='w-100'>
                                <Progress animated value={70} style={{height: '10px'}} color={'info'} />
                            </div>
                        </div>
                        <div className="ability">
                            <img src={csharp} width={40} alt="" />
                            <div className='w-100'>
                                <Progress animated value={60} style={{height: '10px'}} color={'info'} />
                            </div>
                        </div>
                        <div className="ability">
                            <img src={python} width={40} alt="" />
                            <div className='w-100'>
                                <Progress animated value={70} style={{height: '10px'}} color={'info'} />
                            </div>
                        </div>
                        <div className="ability">
                            <img src={bootstrap} width={40} alt="" />
                            <div className='w-100'>
                                <Progress animated value={100} style={{height: '10px'}} color={'info'} />
                            </div>
                        </div>
                        <div className="ability">
                            <img src={mysql} height={47} alt="" />
                            <div className='w-100'>
                                <Progress animated value={90} style={{height: '10px'}} color={'info'} />
                            </div>
                        </div>
                        <div className="ability">
                            <img src={postgresql} width={40} alt="" />
                            <div className='w-100'>
                                <Progress animated value={90} style={{height: '10px'}} color={'info'} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
