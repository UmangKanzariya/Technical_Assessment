import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    profile: { name: "", email: "" },
    experience: { company: "", years: "" },
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormData() {
  return useContext(FormContext);
}
