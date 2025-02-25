import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
    <div>
    <a key={links.home} href="#home">home</a>
    <a key={links.about} href="#about">about</a>
    <a key={links.projects} href="#projects">projects</a>
    </div>
    }</nav>;
   
}

export default NavBar;
