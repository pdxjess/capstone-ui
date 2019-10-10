import React from "react";
import { Link } from 'react-router-dom';

import objectives from './assets/objectives.png';

function Objectives() {
  return (
    <div>
    <img src={objectives} className="objectives"/>
    </div>
  );
}

export default Objectives;
