import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top px-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={`${process.env.PUBLIC_URL}/images/Tesla Title.png`} alt="Tesla" style={{ height: "50px" }}/>
        </a>
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            {/* Dropdown 1 */}
            <li className="nav-item dropdown position-static">
              <a className="nav-link dropdown-toggle" href="#" role="button">Vehicles</a>
              <div className="mega-menu">
                <div className="mega-left">
                  {[
                    { name: "Model S", src: "Model-S Dropdown.avif", link1: "Learn", link2: "Order" },
                    { name: "Model 3", src: "Model-3 Dropdown.avif", link1: "Learn", link2: "Order" },
                    { name: "Model Y", src: "Model-Y Dropdown.avif", link1: "Learn", link2: "Order" },
                    { name: "Model X", src: "Model-X Dropdown.avif", link1: "Learn", link2: "Order" },
                    { name: "Cybertruck", src: "Cybertruck-1 Dropdown.avif", link1: "Learn", link2: "Order" },
                    { name: "Inventory", src: "Mega-Menu-Vehicles-Inventory Dropdown.avif", link1: "Learn", link2: "Order" },
                  ].map((model, idx) => (
                    <div className="model-card" key={idx}>
                      <img src={`/images/Dropdown Images/${encodeURIComponent(model.src)}`} alt={model.name}/>
                      <h5>{model.name}</h5>
                      <a href="#">{model.link1}</a>
                      <a href="#">{model.link2}</a>
                    </div>
                  ))}
                </div>
                <div className="mega-right">
                  <ul>
                    {[
                      "Help Me Choose", "Demo Drive", "Trade-in", "Compare", "Workshops",
                      "Help Me Charge", "Fleet", "Semi", "Roadster", "Federal Tax Credit", "We, Robot"
                    ].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            {/* Dropdown 2 */}
            <li className="nav-item dropdown position-static">
              <a className="nav-link dropdown-toggle" href="#" role="button">Energy</a>
              <div className="mega-menu">
                <div className="mega-left">
                  {[
                    { name: "Model S", src: "Solar Dropdown.avif", link1: "Learn", link2: "Order" },
                    { name: "Model 3", src: "Megapack Dropdown.avif", link1: "Learn", link2: "Order" },
                    { name: "Model Y", src: "Powerwall-US Dropdown.avif", link1: "Learn", link2: "Order" },
                    { name: "Model X", src: "Solar-Panels Dropdown.avif", link1: "Learn", link2: "Order" },
                  ].map((model, idx) => (
                    <div className="model-card" key={idx}>
                      <img src={`/images/Dropdown Images/Dropdown-Energy/${encodeURIComponent(model.src)}`} alt={model.name}/>
                      <h5>{model.name}</h5>
                      <a href="#">{model.link1}</a>
                      <a href="#">{model.link2}</a>
                    </div>
                  ))}
                  </div>
                <div className="mega-right">
                  <ul>
                    {[
                      "Schedule a Consultation", "Why Solar", "Incentives", "Support", "Partner with Tesla",
                      "Commercial", "Utilities"
                    ].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            {/* Dropdown 3 */}
            <li className="nav-item dropdown position-static">
              <a className="nav-link dropdown-toggle" href="#" role="button">Charging</a>
              <div className="mega-menu">
                <div className="mega-left">
                  {[
                    { name: "Model S", src: "Charging Dropdown.avif", link1: "Learn", link2: "Order" },
                    { name: "Model 3", src: "Home-Charging Dropdown.avif", link1: "Learn", link2: "Order" },
                    { name: "Model Y", src: "Supercharging Dropdown.avif", link1: "Learn", link2: "Order" },
                  ].map((model, idx) => (
                    <div className="model-card" key={idx}>
                      <img src={`/images/Dropdown Images/Charging/${encodeURIComponent(model.src)}`} alt={model.name}/>
                      <h5>{model.name}</h5>
                      <a href="#">{model.link1}</a>
                      <a href="#">{model.link2}</a>
                    </div>
                  ))}
                  </div>
                <div className="mega-right">
                  <ul>
                    {[
                      "Help me Charge", "Charging Calculator", "Charging with NACS", "Supercharger Voting", "Host a Supercharger",
                      "Commercial Charging", "Host Wall Connectors"
                    ].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            {/* Dropdown 4 */}
            <li className="nav-item dropdown position-static">
              <a className="nav-link dropdown-toggle" href="#" role="button">Discover</a>
              <div className="mega-menu">
                <div className="mega-left">
                  <div className="footer-columns">
                    <div className="column">
                      <h3>Resources</h3>
                      <ul>
                        <li><a href="#">Demo Drive</a></li>
                        <li><a href="#">Insurance</a></li>
                        <li><a href="#">American Heroes</a></li>
                        <li><a href="#">Learn</a></li>
                        <li><a href="#">Video Guides</a></li>
                        <li><a href="#">Customer Stories</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Workshops</a></li>
                      </ul>
                    </div>
                    <div className="column">
                      <h3>Location Services</h3>
                        <ul>
                          <li><a href="#">Find Us</a></li>
                          <li><a href="#">Find a Collision Center</a></li>
                          <li><a href="#">Find a Certified Installer</a></li>
                        </ul>
                    </div>
                    <div className="column">
                      <h3>Company</h3>
                        <ul>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Careers</a></li>
                          <li><a href="#">Investor Relations</a></li>
                        </ul>
                      </div>
                    </div>
                </div>
              </div>
            </li>
            {/* Dropdown 5 */}
            <li className="nav-item dropdown position-static">
              <a className="nav-link dropdown-toggle" href="#" role="button">Shop</a>
              <div className="mega-menu">
                <div className="mega-left">
                  {[
                    { name: "Charging", src: "Shop-Charging.avif", link1: "Learn", link2: "Order" },
                    { name: "Vehicle Accessories", src: "Vehicle-Accessories.avif", link1: "Learn", link2: "Order" },
                    { name: "Apparel", src: "Shop-Apparel.avif", link1: "Learn", link2: "Order" },
                    { name: "Lifestyle", src: "Shop-Lifestyle.avif", link1: "Learn", link2: "Order" },
                  ].map((model, idx) => (
                    <div className="model-card" key={idx}>
                      <img src={`/images/Dropdown Images/Shop/${encodeURIComponent(model.src)}`} alt={model.name}/>
                      <h5>{model.name}</h5>
                      <a href="#">{model.link1}</a>
                      <a href="#">{model.link2}</a>
                    </div>
                  ))}
                  </div>
              </div>
            </li>
          </ul>
        </div>
        {/* Icons */}
        <div className="d-flex align-items-center gap-3">
          <i className="bi bi-question-circle">
            <img src={`${process.env.PUBLIC_URL}/Icons/help-ico.png`} alt="Tesla" style={{ height: "20px" }}/>
          </i>
          <i className="bi bi-globe">
            <img src={`${process.env.PUBLIC_URL}/Icons/globe-ico.png`} alt="Tesla" style={{ height: "20px" }}/>
          </i>
          <i className="bi bi-person-circle">
            <img src={`${process.env.PUBLIC_URL}/Icons/person-ico.png`} alt="Tesla" style={{ height: "20px" }}/>
          </i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
