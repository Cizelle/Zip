import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import "./DonorForm.css";
interface FormData {
  preExistingConditions: string[];
  allergies: string;
  currentMedications: string;
  medicalReports: FileList | null;
  kidney: boolean;
  liver: boolean;
  heart: boolean;
  lungs: boolean;
  pancreas: boolean;
  corneas: boolean;
  skin: boolean;
  bones: boolean;
  smallIntestine: boolean;
  agreement1: boolean;
  agreement2: boolean;
  signature: Blob | null;
}

const DonorForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    preExistingConditions: [],
    allergies: "",
    currentMedications: "",
    medicalReports: null,
    kidney: false,
    liver: false,
    heart: false,
    lungs: false,
    pancreas: false,
    corneas: false,
    skin: false,
    bones: false,
    smallIntestine: false,
    agreement1: false,
    agreement2: false,
    signature: null,
  });

  const [errors, setErrors] = useState({});
  const signatureCanvasRef = useRef<HTMLCanvasElement>(null);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = event.target;
    const parsedValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: parsedValue });
    setErrors({ ...errors, [name]: "" });
  };

  const handlePreExistingConditionsChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;
    let updatedConditions = [...formData.preExistingConditions];

    if (checked) {
      updatedConditions.push(name);
    } else {
      updatedConditions = updatedConditions.filter(
        (condition) => condition !== name
      );
    }

    setFormData({ ...formData, preExistingConditions: updatedConditions });
  };

  const handleMedicalReportsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, medicalReports: event.target.files });
  };

  const handleSignatureChange = () => {
    if (signatureCanvasRef.current) {
      const canvas = signatureCanvasRef.current;
      canvas.toBlob((blob) => {
        setFormData({ ...formData, signature: blob });
      });
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.agreement1) {
      newErrors.agreement1 = "You must agree to the organ donation terms.";
    }
    if (!formData.agreement2) {
      newErrors.agreement2 =
        "You must read and understand the terms and conditions.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log(formData);
  };

  const preExistingConditions = [
    "Diabetes",
    "Hypertension",
    "Heart Disease",
    "Cancer",
    "Kidney Disease",
    "Liver Disease",
    "Lung Disease",
  ];

  return (
    <form onSubmit={handleSubmit} className="donor-form">
      <h2>Organ Donation Form</h2>

      {}
      <div className="form-group">
        <label>Pre-existing Conditions:</label>
        <br />
        {preExistingConditions.map((condition) => (
          <label key={condition}>
            <input
              type="checkbox"
              name={condition}
              checked={formData.preExistingConditions.includes(condition)}
              onChange={handlePreExistingConditionsChange}
            />
            {condition}
          </label>
        ))}
      </div>

      {}
      <div className="form-group">
        <label htmlFor="allergies">Allergies (if applicable):</label>
        <textarea
          id="allergies"
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
          maxLength={200}
        />
      </div>

      {}
      <div className="form-group">
        <label htmlFor="currentMedications">Current Medications:</label>
        <textarea
          id="currentMedications"
          name="currentMedications"
          value={formData.currentMedications}
          onChange={handleChange}
          maxLength={300}
        />
      </div>

      {}
      <div className="form-group">
        <label htmlFor="medicalReports">
          Medical Reports (Max 5MB per file):
        </label>
        <input
          type="file"
          id="medicalReports"
          name="medicalReports"
          accept=".pdf, .jpg, .png"
          multiple
          onChange={handleMedicalReportsChange}
        />
      </div>

      {}
      <h3>Organ Donation Preferences</h3>
      <div className="organ-preferences">
        {Object.keys(formData)
          .slice(4, 13)
          .map((organ) => (
            <div key={organ} className="organ-preference">
              <label htmlFor={organ}>
                <input
                  type="checkbox"
                  id={organ}
                  name={organ}
                  checked={formData[organ as keyof FormData]}
                  onChange={handleChange}
                />
                {organ.charAt(0).toUpperCase() + organ.slice(1)} {}
              </label>
            </div>
          ))}
      </div>

      {}
      <div className="form-group">
        <label htmlFor="agreement1">
          <input
            type="checkbox"
            id="agreement1"
            name="agreement1"
            checked={formData.agreement1}
            onChange={handleChange}
          />
          I agree to donate my organs after death.
        </label>
        <span className="error">{errors.agreement1}</span>
      </div>
      <div className="form-group">
        <label htmlFor="agreement2">
          <input
            type="checkbox"
            id="agreement2"
            name="agreement2"
            checked={formData.agreement2}
            onChange={handleChange}
          />
          I have read and understood the organ donation terms & conditions.
        </label>
        <span className="error">{errors.agreement2}</span>
      </div>

      {}
      <div className="form-group">
        <label htmlFor="signature">Digital Signature:</label>
        <canvas
          ref={signatureCanvasRef}
          width={300}
          height={100}
          className="signature-canvas"
        ></canvas>
        <button type="button" onClick={handleSignatureChange}>
          Capture Signature
        </button>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default DonorForm;
