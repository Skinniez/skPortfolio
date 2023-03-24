import React from 'react';
import './LogoGrid.css';

import logo1 from '../assets/logos/logo1.png'
import logo2 from '../assets/logos/logo2.png'
import logo3 from '../assets/logos/logo3.png'
import logo4 from '../assets/logos/logo4.png'
import logo5 from '../assets/logos/logo5.png'
import logo6 from '../assets/logos/logo6.png'
import logo7 from '../assets/logos/logo7.png'
import logo8 from '../assets/logos/logo8.png'
import logo9 from '../assets/logos/logo9.png'
import logo10 from '../assets/logos/logo10.png'
import logo11 from '../assets/logos/logo11.png'
import logo12 from '../assets/logos/logo12.png'
import logo13 from '../assets/logos/logo13.png'
import logo14 from '../assets/logos/logo14.png'
import logo15 from '../assets/logos/logo15.png'
import logo16 from '../assets/logos/logo16.png'
import logo17 from '../assets/logos/logo17.png'
import logo18 from '../assets/logos/logo18.png'
import logo19 from '../assets/logos/logo19.png'
import logo20 from '../assets/logos/logo20.png'
import logo21 from '../assets/logos/logo21.png'
import logo22 from '../assets/logos/logo22.png'
import logo23 from '../assets/logos/logo23.png'
import logo24 from '../assets/logos/logo24.png'
import logo25 from '../assets/logos/logo25.png'
import logo26 from '../assets/logos/logo26.png'
import logo27 from '../assets/logos/logo27.png'
import logo28 from '../assets/logos/logo28.png'
import logo29 from '../assets/logos/logo29.png'

const logos = [
    {id: 1, url: logo1,alt:"Chai"},
    {id: 2, url: logo2,alt:"CSS"},
    {id: 3, url: logo3, alt:"Docker"},
    {id: 4, url: logo4, alt:"Express"},
    {id: 5, url: logo5,alt:"GIT"},
    {id: 6, url: logo6,alt:"GITHUB"},
    {id: 7, url: logo7,alt:"HTML"},
    {id: 8, url: logo8,alt:"JavaScript"},
    {id: 9, url: logo9, alt:"Jest"},
    {id: 10, url: logo10,alt:"Bootstrap"},
    {id: 11, url: logo11,alt:"mongoDB"},
    {id: 12, url: logo12,alt:"NodeJS"},
    {id: 13, url: logo13,alt:"Nodemon"},
    {id: 14, url: logo14,alt:"NPM"},
    {id: 15, url: logo15,alt:"PIP"},
    {id: 16, url: logo16,alt:"PostgreSQL"},
    {id: 17, url: logo17,alt:"Python"},
    {id: 18, url: logo18,alt:"ReactJS"},
    {id: 19, url: logo19,alt:"TailwindCSS"},
    {id: 20, url: logo20,alt:"Vercel"},
    {id: 21, url: logo21,alt:"Visual Studio Code"},
    {id: 22, url: logo22,alt:"Yarn"},
    {id: 23, url: logo23,alt:"OBSstudio"},
    {id: 24, url: logo24,alt:"Adobe after Effects"},
    {id: 25, url: logo25,alt:"KnexJS"},
    {id: 26, url: logo26,alt:"Adobe Premiere Pro"},
    {id: 27, url: logo27,alt:"Procreate"},
    {id: 28, url: logo28,alt:"TypeScript"},
    {id: 29, url: logo29,alt:"Figma"},
]
const LogoGrid = () => {
    return (
      <div className="logo-grid">
        {logos.map((logo) => (
          <div key={logo.id} className="logo">
            <img src={logo.url} alt={`Logo ${logo.id}`} />
          </div>
        ))}
      </div>
    );
  };

export default LogoGrid;
