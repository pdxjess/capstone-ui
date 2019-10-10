import React from "react";
import { Link } from 'react-router-dom';

import wireframe from './assets/wireframe.png';

function Wireframe() {
  return (
    <div>
    <img src={wireframe} className="wireframe"/>
    </div>
  );
}

export default Wireframe;
