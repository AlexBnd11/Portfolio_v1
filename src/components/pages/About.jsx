import React, { useState } from 'react';
import './About.scss';
import Card from '../Card';

export default function About() {

    const customStyles = {
        content: {
            height: '500px'
        }
    };

    return (
        <section className='about'>
            <h2>Alex Bonniard</h2>
            <h3>Développeur Front-end</h3>
            <p>Lorem ipsum blabla.Lorem ipsum blabla.Lorem ipsum blabla.Lorem ipsum blabla.Lorem ipsum blabla.</p>
            <h3>À Propos de Moi</h3>
            <p>Lorem ipsum blabla.Lorem ipsum blabla.Lorem ipsum blabla.Lorem ipsum blabla.Lorem ipsum blabla.</p>
            <div className='cards'>
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
};