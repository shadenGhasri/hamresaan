import { Link } from "react-router-dom";
import "./globalStyle.css"
import {Collapse} from 'react-collapse';

const Navbar = () => {
    const handleIcon = ()=>{

        const icon = document.getElementById("icon");
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
          icon.src = "sun.png";
        } else {
          icon.src = "moon.png";
        }
    }

  return (
    <>
      <nav className="navbar">
        <img src="hamresaan.png" alt="logo" className="logo" />
        <ul>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            HOME
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">PORTFOLIO</a>
          </li>
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#">HIRE ME</a>
          </li>
        </ul>
        <img src="moon.png" id="icon" onClick={handleIcon}/>
      </nav>
    </>
  );
};

export default Navbar;
<>
  <nav>
    <img src="images/logo.png" alt="logo" class="logo" />
    <ul>
      <li>
        <a href="#">HOME</a>
      </li>
      <li>
        <a href="#">ABOUT</a>
      </li>
      <li>
        <a href="#">PORTFOLIO</a>
      </li>
      <li>
        <a href="#">SERVICES</a>
      </li>
      <li>
        <a href="#">HIRE ME</a>
      </li>
    </ul>
    <img src="icons/moon.png" id="icon" />
  </nav>
</>;
