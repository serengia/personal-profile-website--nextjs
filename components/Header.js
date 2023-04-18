import React, { useState } from "react";
import { CloseMenuIcon, OpenMenuIcon } from "@/svg";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const openMenuHandler = () => {
    setMenuOpen(true);
  };
  const closeMenuHandler = () => {
    setMenuOpen(false);
  };
  return (
    <header className="header">
      <div className="header-content row">
        <div className="logo">
          <Link href="/">
            <img src="./img/icon-james.png" alt="Home" />
          </Link>
        </div>
        <nav className="nav">
          <div className="menu-icons-container margin-left">
            {!menuOpen && (
              <OpenMenuIcon
                className="menu-icon menu-icon-open"
                onClick={openMenuHandler}
              />
            )}
            {menuOpen && (
              <CloseMenuIcon
                className="menu-icon menu-icon-close"
                onClick={closeMenuHandler}
              />
            )}
          </div>

          <ul className={`menu-list ${menuOpen ? "" : "hidden"}`}>
            <li className="menu-item">
              <Link
                href={"/"}
                className={
                  router.pathname === "/"
                    ? "active-menu-link menu-link"
                    : "menu-link"
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link
                href={"/about"}
                className={
                  router.pathname === "/about"
                    ? "active-menu-link menu-link"
                    : "menu-link"
                }
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="menu-item">
              <Link
                href={"/contact"}
                className={
                  router.pathname === "/contact"
                    ? "active-menu-link menu-link"
                    : "menu-link"
                }
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
