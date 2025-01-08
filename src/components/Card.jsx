import React from 'react';
import './Card.scss'

export default function Card({text1, text2, logoLink, title1, title2}) {

    return (
        <div className="card">
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <div className="card__content">
                <span className="card__content__title">{"> " + title1}</span>
                <p>{text1}</p>
                <span className="card__content__title">{"> " + title2}</span>
                <p>{text2}</p>
            </div>
            <div className="card__logo">
                <img src={logoLink} alt="logo"></img>
            </div>
        </div>
    );
};