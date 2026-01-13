import React from "react";
import UserSearchFilter from "./Component/UserSearchFilter";
import MultiStepForm from "./Component/MultiStepForm";
import { FormProvider } from "./Component/FormContext";

export default function App() {
  return (
    <div>
      <UserSearchFilter />

      <hr style={{ margin: "30px 0" }} />

      <FormProvider>
        <MultiStepForm />
      </FormProvider>
    </div>
  );
}
