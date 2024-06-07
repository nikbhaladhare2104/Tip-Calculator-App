import React from "react";
import Tip from "./Tip";
import { useForm } from "../Context";

const Left = () => {
  const [formData, setFormData] = useForm();
  return (
    <div className="left">
      <form action="submit" className="form">
        <label htmlFor="bill" className="bill">
          Bill
        </label>
        <div className="input-field">
          <input
            id="bill"
            type="text"
            className="bill-input"
            placeholder="0"
            value={formData.bill}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, bill: e.target.value }))
            }
          />
          <img src="./images/icon-dollar.svg" alt="dollar icon" />
        </div>
        <Tip />
        <label htmlFor="number-of-people">Number of People</label>
        <div className="input-field">
          <input
            id="number-of-people"
            type="text"
            className="people-input"
            placeholder="1"
            value={formData.numberOfPeople}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                numberOfPeople: e.target.value,
              }))
            }
          />
          <img src="./images/icon-person.svg" alt="person icon" />
        </div>
      </form>
    </div>
  );
};

export default Left;
