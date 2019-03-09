import React from 'react';

import CSS from './assets/css.svg';
import Docker from './assets/docker.svg';
import Go from './assets/go.svg';
import HTML from './assets/html5.svg';
import JS from './assets/js.svg';
import NodeJS from './assets/node.svg';
import Perl from './assets/perl.svg';
import R from './assets/r.svg';
import ReactLogo from './assets/react.svg';
import WA from './assets/wa.svg';

export const BackdropLeft = () => (
  <div className="skills__backdrop-left">
    <img alt="CSS" src={CSS} style={{ left: '20%', top: '10%' }} />
    <img alt="Go" src={Go} style={{ left: '50%', top: '30%' }} />
    <img alt="React" src={ReactLogo} style={{ left: '10%', top: '50%' }} />
    <img alt="CSS" src={JS} style={{ left: '70%', top: '65%' }} />
    <img alt="NodeJS" src={NodeJS} style={{ left: '55%%', top: '80%' }} />
  </div>
);

export const BackdropRight = () => (
  <div className="skills__backdrop-right">
    <img alt="Perl" src={Perl} style={{ left: '30%', top: '20%' }} />
    <img alt="R" src={R} style={{ left: '70%', top: '35%' }} />
    <img alt="HTML" src={HTML} style={{ left: '40%', top: '60%' }} />
    <img alt="WA" src={WA} style={{ left: '55%', top: '80%' }} />
    <img alt="Docker" src={Docker} style={{ left: '15%', top: '90%' }} />
  </div>
);
