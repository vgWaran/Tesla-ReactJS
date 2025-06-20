import './Teslacard.css';
import 'bootstrap'
const PUBLIC = process.env.PUBLIC_URL;

const Teslacard = () => {
  return (
    <div className="card-container">
      {/* Left Card */}
      <div className="card">
        <div className="card-inner">
          <div className="card-content">
            <h1>Compare Models</h1>
            <h6>Find the Tesla vehicle that’s right for you.</h6>
            <button className='btn btn-light'>Compare Models</button>
          </div>
          <img src={`${PUBLIC}/images/Cardimage.avif`} alt="Tesla Models" className="card-image"/>
        </div>
      </div>

      {/* Right Card */}
      <div className="card">
        <div className="card-inner">
          <div className="card-content">
            <h1>American Heroes</h1>
            <h6>$1,000 off for military, first responders, teachers and students.</h6>
            <button>Learn More</button>
          </div>
          <img src={`${PUBLIC}/images/Card2.avif`} alt="Tesla Models" className="card-image"/>
        </div>
      </div>
    </div>
  );
};

export default Teslacard;
