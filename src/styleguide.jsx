import React from "react";
import { Link } from 'react-router-dom';

import styleguide from './assets/styleguide.png';

function Styleguide() {
  return (
    <div>
    <img src={styleguide} className="styleguide"/>
    </div>
  );
}

export default Styleguide;
