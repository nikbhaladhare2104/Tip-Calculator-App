import React from "react";
import { useForm } from "../Context";

const Tip = () => {
  const [formData, setFormData] = useForm();
  const handleClick = (e) => {
    setFormData((prev) => ({ ...prev, tip: e }));
  };
  const tips = [5, 10, 15, 25, 50];
  return (
    <div className="tip-container">
      <p className="tip-title">Select Tip %</p>
      <div className="btn-container">
        {tips.map((tip) => (
          <div
            className="btn"
            key={tip}
            style={{
              backgroundColor:
                tip === formData.tip
                  ? "var(--lightCyan)"
                  : "var(--Very-dark-cyan)",
              color:
                tip === formData.tip ? "var(--Very-dark-cyan)" : "var(--White)",
            }}
            onClick={() => handleClick(tip)}
          >
            {tip}%
          </div>
        ))}
        {/* <div className="btn" onClick={() => handleClick(5)}>
          5%
        </div>
        <div className="btn" onClick={() => handleClick(10)}>
          10%
        </div>
        <div className="btn" onClick={() => handleClick(15)}>
          15%
        </div>
        <div className="btn" onClick={() => handleClick(25)}>
          25%
        </div>
        <div className="btn" onClick={() => handleClick(50)}>
          50%
        </div> */}
        <input
          type="text "
          className="custom-input"
          placeholder="Custom"
          value={formData.tip}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, tip: e.target.value }))
          }
        />
      </div>
    </div>
  );
};

export default Tip;
