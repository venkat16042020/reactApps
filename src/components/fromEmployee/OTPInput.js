import React from "react";

const OTPInput = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      maxLength={6} // Assuming OTP length is 6 digits
    />
  );
};

export default OTPInput;
