import React from "react";
import { Link } from 'react-router-dom';

import moodBoard from './assets/moodboard.png';

function Moodboard() {
  return (
    <div>
    <img src={moodBoard} className="moodboard"/>
    </div>
  );
}

export default Moodboard;
