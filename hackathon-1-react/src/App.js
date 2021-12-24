import logo from "./logo.png";
import theme from "./theme-1.jpg";
import "./App.css";

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <img src={logo} alt="Logo" className="logo" />
        </li>
        <li className="mobilehide">Men</li>
        <li className="mobilehide">Women</li>
        <li className="mobilehide">Adidas</li>
        <li className="mobilehide">Yeezy</li>
        <li className="mobilehide">Nike</li>
        <li className="mobilehide">Jordan</li>
        <button>New Releases</button>
        <button>Retailers</button>
      </ul>
    </div>
  );
};

function Theme() {
  return (
    <div className="theme-holder">
      <div className="themeimage"></div>
      <form>
        <div className="form-rect">
          <input
            id="searchbox"
            className="searchbox-input"
            type="text"
            placeholder="Search for your favorite shoe!"
          />
          <input id="searchbtn" type="submit" value="" />
          <i id="searchbtn-logo" className="fas fa-search"></i>
        </div>
      </form>
    </div>
  );
}

function App() {
  return (
    <section className="pagesection">
      <Navbar />
      <Theme />
    </section>
  );
}

export default App;
