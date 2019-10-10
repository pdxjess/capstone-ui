import React from "react";
import { Link } from 'react-router-dom';

import overview from './assets/overview.png';

function Overview() {
  return (
    <div>
    <img src={overview} className="overview"/>
    </div>
  );
}

export default Overview;
