import React, { useState, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import NavLocker from "./NavLocker";

export default function Navhead() {
  const [isOpen, setOpen] = useState(false);
  const [ShowNav, setShowNav] = useState(false);

  const changeBgColor = () => {
    window.scrollY >= 60 ? setShowNav(true) : setShowNav(false);
  };

  useEffect(() => {
    changeBgColor();
    window.addEventListener("scroll", changeBgColor);
    return () => {
      window.removeEventListener("scroll", changeBgColor);
    };
  },[]);

  const dStyle = "position-fixed w-100 top-0 bg-transparent";
  const deStyle = "position-fixed w-100 top-0 bg-white";

  return (
    <Navbar className={ShowNav ? deStyle : dStyle} style={{ zIndex: 10 }}>
      <div
        className="container-xl d-flex align-items-center justify-content-between mx-auto px-2"
      >
        <div className="d-flex align-items-center gap-3 gap-md-5">
          <NavLink
            className="align-self-center logo"
            to="/"
            style={{ zIndex: 10 }}
          >
            TVMAZE
          </NavLink>
          <div className="d-none d-md-block">
            <NavLink className="align-self-center navword">TV Shows</NavLink>
          </div>
        </div>
        <div className="d-md-flex justify-content-between align-items-center gap-4 d-none d-md-block">
          <NavLink className="align-self-center navword" to="/Search">
            Search
          </NavLink>
          <a
            href="http://www.tvmaze.com"
            target="_blank"
            className="fw-bold navword"
            rel='noreferrer'
          >
            FIND OUT MORE
          </a>
        </div>
        <div className="d-md-none" style={{ zIndex: 10 }}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {isOpen && <NavLocker isOpen={isOpen} setOpen={setOpen} />}
    </Navbar>
  );
}
