import "./Findyourcharge.css";

const Findyourcharge = () => {
  return (
    <div className="charge-section">
      <div className="charge-left ps-5">
        <h1>Find Your Charge</h1>
        <p>
          View the network of Tesla Superchargers and Destination Chargers
          available near you.
        </p>
        <div className="charge-buttons">
          <button className="black-btn">View Network</button>
          <button className="light-btn">Learn More</button>
        </div>
      </div>
      <div className="charge-right pe-5">
        <div className="charge-stat">
          <h2>31,311
            <img 
                src="/images/Superchargers.svg"
                alt="Super Chargers"
                className="charge-image1"
                style={{width: "48px", height: "48px"}}
            />
          </h2>
          <p>Superchargers</p>
        </div>
        <div className="charge-stat">
          <h2> 10,429
            <img 
                src="/images/DestinationChargers.svg"
                alt="Destination Chargers"
                className="charge-image2"
                style={{width: "48px", height: "48px"}}
            />
          </h2>
          <p>Destination Chargers</p>
        </div>
      </div>
    </div>
  );
};
export default Findyourcharge;
