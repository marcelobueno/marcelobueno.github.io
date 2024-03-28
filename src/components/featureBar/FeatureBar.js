import React, { useState } from 'react'
import { Container, Progress, Tooltip } from 'reactstrap'
import php from '../../assets/img/icons/php.svg'
import laravel from '../../assets/img/icons/laravel.svg'
import javascript from '../../assets/img/icons/javascript.svg'
import nodejs from '../../assets/img/icons/nodejs.svg'
import iconreact from '../../assets/img/icons/react.svg'
import git from '../../assets/img/icons/git.svg'
import jquery from '../../assets/img/icons/jquery.svg'
import mysql from '../../assets/img/icons/mysql.svg'
import postgresql from '../../assets/img/icons/postgresql.svg'
import cicd from '../../assets/img/icons/cicd.svg'
import docker from '../../assets/img/icons/docker.svg'
import bootstrap from '../../assets/img/icons/bootstrap.svg'
import styles from './featureBar.module.css'


export const FeatureBar = () => {

    return (
        <>
            <Container>
                <div className="text-center">
                    <h2 className='mt-3 mb-4'>Habilidades</h2>
                </div>
                <div className="d-flex gap-2 mobile_responsiviness">
                    <div className="d-flex align-items-center justify-content-between flex-wrap w-100 gap-3">
                        <div className={`${styles.skill}`}>
                            <img src={nodejs} width={40} alt="" />
                            <h6>NodeJS</h6>
                        </div>
                        <div className={`${styles.skill}`}>
                            <img src={iconreact} width={40} alt="" />
                            <h6>ReactJS</h6>
                        </div>
                        <div className={`${styles.skill}`}>
                            <img src={javascript} width={40} alt="" />
                            <h6>JavaScript</h6>
                        </div>
                        <div className={`${styles.skill}`}>
                            <img src={php} width={40} alt="" />
                            <h6>PHP</h6>
                        </div>
                        <div className={`${styles.skill}`}>
                            <img src={laravel} width={40} alt="" />
                            <h6>Laravel</h6>
                        </div>
                        <div className={`${styles.skill}`}>
                            <img src={git} width={40} alt="" />
                            <h6>Git</h6>
                        </div>
                        <div className={`${styles.skill}`}>
                            <img src={cicd} width={40} alt="" />
                            <h6>CICD</h6>
                        </div>
                        <div className={`${styles.skill}`}>
                            <img src={docker} width={40} alt="" />
                            <h6>Docker</h6>
                        </div>
                        <div className={`${styles.skill}`}>
                            <img src={mysql} height={47} alt="" />
                            <h6>MySQL</h6>
                        </div>
                        <div className={`${styles.skill}`}>
                            <img src={postgresql} width={40} alt="" />
                            <h6>PostgreSQL</h6>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
