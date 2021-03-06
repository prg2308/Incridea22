import { signOut } from "firebase/auth";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../firebaseConfig";
import logo from "../Images/logo.png";
import Logout from "./Auth/Logout";
import LogoutModal from "./Auth/LogoutModal";

function LoginBtn({ user, tab, isMobile, setSignoutModalOpen }) {
  let classNames = `${
    !isMobile ? "hidden md:block text-xl" : "block md:hidden text-sm"
  } border-2 border-igold p-2 font-bold  md:hover:bg-igold md:hover:text-white font-nav text-igold`;

  return (
    <>
      {!(user && tab === "profile") ? (
        <Link
          to={user ? "/profile" : "/login"}
          className={classNames}
          style={{ fontFamily: "Cinzel" }}
        >
          {user ? "PROFILE" : "LOGIN"}
        </Link>
      ) : (
        <Logout
          style={{ fontFamily: "Cinzel" }}
          className={classNames}
          onClick={() => setSignoutModalOpen(true)}
        />
      )}
    </>
  );
}

function Navbar({ tab, notsticky }) {
  const [click, setClick] = useState(false);
  const [offset, setOffset] = useState(0);
  const [signoutModalOpen, setSignoutModalOpen] = useState(false);

  useEffect(() => {
    const scrollFn = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", scrollFn);
  }, [offset]);
  const user = useContext(AuthContext);
  const handleHamburger = () => {
    if (click === 0) {
      document.getElementById("mobile-menu-4").classList.add("hidden");
      document.getElementById("mobile-menu-4").classList.add("visible");
      setClick(1);
    } else {
      document.getElementById("mobile-menu-4").classList.add("visible");
      document.getElementById("mobile-menu-4").classList.remove("hidden");
      setClick(0);
    }
  };

  return (
    <>
      <nav
        className={`${!notsticky ? "sticky" : ""}   top-0 bg-[#000] z-[500] ${
          offset > 100 ? "py-2" : "py-6"
        } transform ease-linear duration-300 tracking-wider px-1 md:px-4 font-nav  min-w-fit  `}
      >
        <div className="mx-1 md:mx-3 text-center flex flex-wrap justify-between items-center content-center">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mx-3 h-9 md:h-16" alt="Incridea Logo" />
          </Link>
          <div className="flex md:hidden">
            <LoginBtn
              setSignoutModalOpen={setSignoutModalOpen}
              user={user}
              tab={tab}
              isMobile
            />
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              onClick={handleHamburger}
              className={`ml-2 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  md:hidden transition-all ease-out duration-150 hover:scale-125 `}
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="justify-stretch  items-center w-full md:flex md:w-auto hidden  md:order-1"
            id="mobile-menu-4"
          >
            <ul className="flex pt-4 md:pt-0 items-stretch md:items-center flex-col mt-0 md:flex-row md:space-x-8 md:text-sm  md:font-medium">
              <li>
                <Link
                  to="/"
                  className={`block py-2 pr-4 pl-3 bg-transparent active:text-white focus:text-white border-none  text-xl  font-nav font-bold md:border-0 hover:text-igold md:p-0 ${
                    tab === "home" ? "text-igold" : "text-[#EDEDED]"
                  } `}
                  aria-current="page"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className={`block py-2 pr-4 pl-3 bg-transparent border-none text-xl font-nav  font-bold  md:border-0 hover:text-igold md:p-0 ${
                    tab === "events" ? "text-igold" : "text-[#EDEDED]"
                  } `}
                >
                  events
                </Link>
              </li>
              <li>
                <Link
                  to="/pronite"
                  className={`block py-2 pr-4 pl-3 bg-transparent  text-xl font-nav font-bold  md:border-0 hover:text-igold md:p-0 ${
                    tab === "pronite" ? "text-igold" : "text-[#EDEDED]"
                  } `}
                >
                  pronites
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className={`block py-2 pr-4 pl-3 bg-transparent  text-xl font-nav font-bold  md:border-0 hover:text-igold md:p-0 ${
                    tab === "gallery" ? "text-igold" : "text-[#EDEDED]"
                  } `}
                >
                  gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/sponsors"
                  className={`block py-2 pr-4 pl-3 bg-transparent  text-xl  font-nav font-bold md:border-0 hover:text-igold md:p-0 ${
                    tab === "sponsors" ? "text-igold" : "text-[#EDEDED]"
                  } `}
                >
                  sponsors
                </Link>
              </li>

              <li>
                <Link
                  to="/team"
                  className={`block py-2 pr-4 pl-3 bg-transparent text-xl font-nav font-bold  md:border-0 hover:text-igold md:p-0 ${
                    tab === "team" ? "text-igold" : "text-[#EDEDED]"
                  } `}
                >
                  about us
                </Link>
              </li>
              <li>
                <LoginBtn
                  setSignoutModalOpen={setSignoutModalOpen}
                  user={user}
                  tab={tab}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {signoutModalOpen && (
        <LogoutModal
          closeModal={() => setSignoutModalOpen(false)}
          signOut={() => signOut(auth)}
        />
      )}
    </>
  );
}

export default Navbar;
