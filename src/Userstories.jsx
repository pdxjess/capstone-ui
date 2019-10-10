import React from "react";
import { Link } from 'react-router-dom';

import userstories from './assets/userstories.png';

function UserStories() {
  return (
    <div>
    <img src={userstories} className="userstories"/>
    </div>
  );
}

export default UserStories;
