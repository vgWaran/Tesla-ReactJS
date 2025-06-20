import './Stickyfooter.css';

const Stickyfooter = () => {
  return (
    <div className="toolbar">
      <button className="ask-btn">
        <img src='./Icons/chat.png' style={{width: "20px"}}/>
        Ask a question
        <span className="tooltip">"What makes a Tesla different than other EVs?"</span>
      </button>
      <button className="schedule-btn">
        <img src='./Icons/steering-wheel.png' style={{width: "20px"}}/>
        Schedule a Drive Today
      </button>
    </div>
  );
};

export default Stickyfooter;
