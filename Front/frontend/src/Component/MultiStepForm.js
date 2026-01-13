import React, { useState } from "react";
import { useFormData } from "./FormContext";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const { formData, setFormData } = useFormData();

  const submitData = () => {
    console.log("✅ Final Form Data:", formData);
    alert("Submitted! Check Console.");
  };

  return (
    <div style={{ maxWidth: 500, margin: "20px auto" }}>
      <h2>Multi-Step Registration Form</h2>

      {step === 1 && (
        <>
          <h3>Step 1: Profile</h3>

          <input
            placeholder="Name"
            value={formData.profile.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                profile: { ...formData.profile, name: e.target.value },
              })
            }
          />

          <br /><br />

          <input
            placeholder="Email"
            value={formData.profile.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                profile: { ...formData.profile, email: e.target.value },
              })
            }
          />

          <br /><br />

          <button onClick={() => setStep(2)}>Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <h3>Step 2: Experience</h3>

          <input
            placeholder="Company"
            value={formData.experience.company}
            onChange={(e) =>
              setFormData({
                ...formData,
                experience: { ...formData.experience, company: e.target.value },
              })
            }
          />

          <br /><br />

          <input
            placeholder="Years"
            value={formData.experience.years}
            onChange={(e) =>
              setFormData({
                ...formData,
                experience: { ...formData.experience, years: e.target.value },
              })
            }
          />

          <br /><br />

          <button onClick={() => setStep(1)}>Back</button>
          <button onClick={submitData} style={{ marginLeft: 10 }}>
            Submit
          </button>
        </>
      )}
    </div>
  );
}
