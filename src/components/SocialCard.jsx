import React from 'react';
import './SocialCard.scss';

export default function SocialCard({ logo, title, color, fontColor, link }) {
    const getImageUrl = (imageName) => {
        return new URL(`../assets/images/socials_logos/${imageName}`, import.meta.url).href;
    };

    return (
        <div className='social-card' style={{backgroundColor: color}}>
            <a href={link} target='_blank'>
                <img src={getImageUrl(logo)} alt={title} />
                <span style={{color: fontColor}}>{title}</span>
            </a>
        </div>
    );
};