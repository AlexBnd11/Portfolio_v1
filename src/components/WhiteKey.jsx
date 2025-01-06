import React, { useState } from 'react';
import './WhiteKey.scss';

export default function WhiteKey({ noteName }) {
  return (
        <div className="white-key">
            <span>{noteName}</span>
        </div>
    );
};