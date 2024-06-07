import React from "react";
import { useForm } from "../Context";

const Right = () => {
  const [formData, setFormData] = useForm();
  const nOFPeople =
    isNaN(formData.numberOfPeople) || formData.numberOfPeople === ""
      ? 1
      : formData.numberOfPeople;
  const tipAmount = (formData.bill * formData.tip) / 100;
  let total = (parseInt(formData.bill) + tipAmount) / nOFPeople;
  let totalPerPerson = total.toFixed(2);
  let tipPerPerson = (tipAmount / nOFPeople).toFixed(2);

  const handleClick = () => {
    setFormData((prev) => ({ ...prev, numberOfPeople: "", bill: "", tip: "" }));
  };
  return (
    <div className="right">
      <div className="tip-amount">
        <div className="amountPerPerson">
          <p
            style={{
              color: "var(--White)",
              fontWeight: "700",
              fontSize: "16px",
            }}
          >
            Tip Amount
          </p>
          <p
            style={{
              color: "var(--Grayish-cyan)",
              fontWeight: "600",
              fontSize: "12px",
            }}
          >
            / person
          </p>
        </div>
        <div className="amount">${tipPerPerson}</div>
      </div>
      <div className="total-amount">
        <div className="amountPerPerson">
          <p
            style={{
              color: "var(--White)",
              fontWeight: "700",
              fontSize: "16px",
            }}
          >
            Total
          </p>
          <p
            style={{
              color: "var(--Grayish-cyan)",
              fontWeight: "600",
              fontSize: "12px",
            }}
          >
            / person
          </p>
        </div>
        <div className="amount">
          ${isNaN(totalPerPerson) ? "0.00" : totalPerPerson}
        </div>
      </div>

      <div className="reset-btn" onClick={handleClick}>
        RESET
      </div>
    </div>
  );
};

export default Right;
