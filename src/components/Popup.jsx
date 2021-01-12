import "../styles/Popup.css";

export const Popup = ({ children, trigger, setTrigger }) => {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(!trigger)}>
          Close
        </button>
        {children}
      </div>
    </div>
  ) : (
    ""
  );
};
