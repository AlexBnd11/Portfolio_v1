import React from 'react';
import './Contact.scss';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact({ display }) {
    return (
        <AnimatePresence>
            {display && (
                <motion.section className='contact'>
                    <h2>Contactez-moi</h2>
                </motion.section>
            )}
        </AnimatePresence>
    );
}