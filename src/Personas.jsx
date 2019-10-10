import React from "react";
import { Link } from 'react-router-dom';

import personas from './assets/personas.png';

function Personas() {
  return (
    <div>
    <img src={personas} className="personas"/>
    </div>
  );
}

export default Personas;
