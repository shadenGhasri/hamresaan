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

    const handleCollapse = () =>{
      
        
    }

  return (
    <>
      <nav>
        <img src="hamresaan.png" alt="logo" className="logo" />
        <ul>
          <li onClick={handleCollapse}>
            <a href="#">HOME</a>
            <i className="bi bi-caret-down px-1" id="caret-right" ></i>
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
