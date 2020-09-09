import React from "react";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import NotificationsNoneTwoToneIcon from "@material-ui/icons/NotificationsNoneTwoTone";
import Avatar from "@material-ui/core/Avatar";
import Main from "./Main";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header__cover">
        <div className="header__1">
          <div className="header__logo">
            <CameraAltIcon />
          </div>
          <ul className="header__main__nav">
            <li>
              <Link href="#">home</Link>
            </li>
            <li>
              <Link href="#">collection</Link>
            </li>
            <li>
              <Link href="#">content</Link>
            </li>
            <li>
              <Link href="#">about</Link>
            </li>
            <li>
              <NotificationsNoneTwoToneIcon />
            </li>
            <li>
              <Avatar
                alt="profile"
                src="data:image/jpeg;base64,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"
              />
            </li>
          </ul>
        </div>

        <div className="header2">
          <div className="header2__content">
            <h1>Unsplash</h1>
            <p>Beautiful, free photos</p>
            <p>
              Beautiful, free photos Beautiful, free photosBeautiful, free
              photos
            </p>
            <div className="header__middle">
              <div className="">
                <SearchIcon />
              </div>
              <InputBase
                className="input"
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
        </div>
        <Main />
      </div>
    </div>
  );
}
