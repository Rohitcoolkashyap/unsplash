import React, { useState } from "react";
import LaunchIcon from "@material-ui/icons/Launch";

import { Link } from "react-router-dom";
import Image from "./Image";
import Image2 from "./Image2";
export default function Main() {
  const [check, setCheck] = useState(true);
  return (
    <div className="main">
      <div className="main-content">
        <ul className="main__nav">
          <Link to="/" onClick={() => setCheck(true)}>
            <li>Trending</li>
          </Link>

          <Link to="/image2" onClick={() => setCheck(false)}>
            <li>new</li>
          </Link>
        </ul>

        <ul className="main__nav2">
          <li>
            <LaunchIcon />
          </li>
          <li>
            <LaunchIcon />
          </li>
        </ul>
      </div>

      {check ? <Image /> : <Image2 />}
    </div>
  );
}
