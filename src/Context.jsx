import React, { useContext, useState } from "react";

export const form = React.createContext();

export const useForm = () => {
  return useContext(form);
};

const ContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    bill: "",
    numberOfPeople: "",
    tip: "",
  });
  return (
    <form.Provider value={[formData, setFormData]}>{children}</form.Provider>
  );
};

export default ContextProvider;
