/* eslint-disable react/prop-types */
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { close, menu } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-2 fixed
//       top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh] Purple`}>
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}>
//           Home
//         </Link>
//         <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${"white"} hover:text-taupe text-[21px] font-medium tracking-[3px] cursor-pointer nav-links `}
//               onClick={() => setActive(nav.title)}>
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         {/* mobile */}
//         <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
//           {toggle ? (
//             <div
//               className={`p-6 bg-flashWhite opacity-[0.98] absolute
//                 top-0 left-0 w-screen h-[100vh] z-10 menu ${
//                   toggle ? "menu-open" : "menu-close"
//                 }`}>
//               <div className="flex justify-end">
//                 <img
//                   src={close}
//                   alt="close"
//                   className="w-[22px] h-[22px] object-contain cursor-pointer"
//                   onClick={() => setToggle(!toggle)}
//                 />
//               </div>
//               <ul
//                 className="list-none flex flex-col -gap-[1rem]
//                 items-start justify-end mt-[10rem] -ml-[35px]">
//                 {navLinks.map((nav) => (
//                   <li
//                     id={nav.id}
//                     key={nav.id}
//                     className={`${
//                       active === nav.title ? "text-french" : "text-eerieBlack"
//                     } text-[88px] font-bold font-arenq
//                       uppercase tracking-[1px] cursor-pointer`}
//                     onClick={() => {
//                       setToggle(!toggle);
//                       setActive(nav.title);
//                     }}>
//                     <a href={`#${nav.id}`}>{nav.title}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ) : (
//             <img
//               src={menu}
//               alt="menu"
//               className="w-[34px] h-[34px] object-contain cursor-pointer"
//               onClick={() => setToggle(!toggle)}
//             />
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import "../assets/CSS/components.css";
import useWindowWidth from "../assets/JS/useWindowWidth"; // Adjust the path based on your project structure

function Glitch(props) {
  return (
    <div id="wrapper">
      <h1 className="glitch" data-text={props.text}>
        {props.text}
      </h1>
    </div>
  );
}

function NavLong() {
  return (
    <nav className="glass">
      <a href="#home">
        <Glitch text="Home" />
      </a>
      <a href="#about">
        <Glitch text="About" />
      </a>
      <a href="#projects">
        <Glitch text="Projects" />
      </a>
      <a href="#experience">
        <Glitch text="Experience" />
      </a>
      <a href="#contact">
        <Glitch text="Contact" />
      </a>
    </nav>
  );
}

function NavShort() {
  return (
    <nav className="glass">
      <a href="/#">
        <Glitch text="Home" />
      </a>
      <a href="/#">
        <Glitch text="About" />
      </a>
      <a href="/#">
        <Glitch text="Projects" />
      </a>
      <a href="#experience">
        <Glitch text="Experience" />
      </a>
      <a href="/#">
        <Glitch text="Contact" />
      </a>
    </nav>
  );
}

function Navbar() {
  const windowWidth = useWindowWidth(); // Use the custom hook here
  return <header>{windowWidth > 900 ? <NavLong /> : <NavShort />}</header>;
}

export default Navbar;
