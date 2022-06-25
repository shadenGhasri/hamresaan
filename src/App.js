import Navbar from "./components/nav";
import "./components/globalStyle.css";

function App() {
  return (
    <>
      <section className="hero">
      <Navbar />
      <section className="info">
        <h1>
          I'm <span>Shaden</span> Ghasri
        </h1>
        <p>
          Lorem ipsum dolor site amet consectetur adipisicing elit,
          <br />
          Tempora omnis impedit necessitatibus.
        </p>
        <a href="#">more inf</a>
      </section>
      <section class="img-box">
        <img src="pattern.png" className="black-img" />
        <img src="girl.png" className="main-img" />
      </section>
      <section class="socials">
        <a href="">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="">
          <i className="fab fa-behance"></i>
        </a>
        <a href="">
          <i className="fab fa-dribbble"></i>
        </a>
      </section>
    </section>
    </>
  );
}

export default App;
