import "./CardInfo.css";
import { useForm } from "react-hook-form";

function CardInfo({ getData }) {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const submitData = (data) => {
    getData(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitData)}>
        <div className="card_holder">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Jane Appleseed"
            {...register("cardholderName", {
              required: "Cardholder name is required",
              pattern: {
                // Regex for two words, each min 2 letters, all uppercase
                value: /^[A-Za-z]{2,}(?: [A-Za-z]{2,})+$/,
                message: "Please enter name and surname",
              },
            })}
          />
          {errors.cardholderName && (
            <p className="error">{errors.cardholderName.message}</p>
          )}
        </div>
        <div className="card_number">
          <label htmlFor="number">CARD NUMBER</label>
          <input
            type="text"
            inputMode="numeric"
            id="number"
            maxLength={16}
            placeholder="e.g. 1234 5678 9123 0000"
            {...register("cardNumber", {
              required: "Card number is required",
              pattern: {
                // Regex for 16 digits (can include spaces for display but removed for validation)
                value: /^\d{16}$/,
                message: "Card number must be 16 natural digits",
              },
              // Custom validation to ensure it's natural digits and remove spaces for submission if any were typed
              setValueAs: (value) => value.replace(/\s/g, ""), // Remove spaces before validation and submission
            })}
          />
          {errors.cardNumber && (
            <p className="error">{errors.cardNumber.message}</p>
          )}
        </div>
        <div className="inner_wrapper">
          <div className="expiration_date">
            <label htmlFor="exp_date">EXP. DATE (MM/YY)</label>
            <input type="date" id="exp_date" {...register("expDate")} />
          </div>

          <div className="cvc">
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={3}
              placeholder="e.g. 123"
              {...register("cvc", {
                required: "CVC is required",
                pattern: {
                  value: /^\d{3}$/, // Exactly 3 digits
                  message: "CVC must be 3 digits",
                }
              })}
            />
            {errors.cvc && <p className="error">{errors.cvc.message}</p>}
          </div>
        </div>
        <button type="submit">Confirm</button>
      </form>
    </>
  );
}

export default CardInfo;
