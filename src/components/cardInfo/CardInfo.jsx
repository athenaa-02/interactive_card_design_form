import "./CardInfo.css";

function CardInfo() {
  return (
    <>
      <form>
        <div className="card_holder">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input type="text" id="name" placeholder="e.g. Jane Appleseed" />
        </div>
        <div className="card_number">
          <label htmlFor="number">CARD NUMBER</label>
          <input
            type="number"
            id="number"
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>
        <div className="inner_wrapper">
          <div className="expiration_date">
            <label htmlFor="exp_date">EXP. DATE (MM/YY)</label>
            <input type="date" id="exp_date" />
          </div>

          <div className="cvc">
            <label htmlFor="cvc">CVC</label>
            <input type="number" placeholder="e.g. 123" />
          </div>
        </div>
        <button type="submit">Confirm</button>
      </form>
    </>
  );
}

export default CardInfo;
