// import "./NavBar.css";
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Hero from "../hero2/page";
import "./nav2.css";
import { useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();


//   const handleLogout = () => {
//     // localStorage.removeItem("token");
//     // localStorage.removeItem("user");
//     // Clears all items in localStorage
// localStorage.clear();

//     router.push("/login");
//   };
  return (
    <div>
      <div className="navbar__container">
        <span className="navbar__span">
          Summer Sales for all Swim Suits and Free Express Delivery-off 50%!
        </span>
        <p className="navbar__shopnow">shopNow</p>
        {/* <button onClick={handleLogout}>Sign out</button> */}
        <p className="navbar__langage">English</p>
        {/* user Name */}

        {/* <p className="navbar__langage">{userNameLogged}</p> */}

        <div style={{ fontSize: "12px", color: "white" }}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <Hero />
    </div>
  );
}

export default NavBar;
