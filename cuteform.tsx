import React, { useState } from "react";
import "./CuteForm.css";

interface FormData {
  age: number;
  gender: string;
  bp: number;
  heartAttack: string;
  heartValve: string;
  heartDefectAtBirth: string;
  severeCysticFibrosis: string;
  cardiomyopathy: string;
  copd: string;
  repeatedUrinaryInfections: string;
  diabetes: string;
  bloodTypeMatch: string;
  hlaMatchScore: number | null;
  crossmatchResult: string;
  praScore: number | null;
  ageDiff: number;
  urgentScore: number;
  compatible: string;
}

const CuteForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    age: 0,
    gender: "male",
    bp: 50,
    heartAttack: "yes",
    heartValve: "yes",
    heartDefectAtBirth: "yes",
    severeCysticFibrosis: "yes",
    cardiomyopathy: "yes",
    copd: "yes",
    repeatedUrinaryInfections: "yes",
    diabetes: "yes",
    bloodTypeMatch: "yes",
    hlaMatchScore: null,
    crossmatchResult: "yes",
    praScore: null,
    ageDiff: 0,
    urgentScore: 0,
    compatible: "yes",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    const parsedValue = type === "number" ? parseInt(value, 10) : value;

    setFormData({ ...formData, [name]: parsedValue });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (formData.age < 0 || formData.age > 100) {
      newErrors.age = "Age must be between 0 and 100.";
    }
    if (formData.bp < 50 || formData.bp > 200) {
      newErrors.bp = "BP must be between 50 and 200.";
    }
    if (
      formData.hlaMatchScore !== null &&
      (formData.hlaMatchScore < 0 || formData.hlaMatchScore > 100)
    ) {
      newErrors.hlaMatchScore = "HLA Match Score must be between 0 and 100.";
    }
    if (
      formData.praScore !== null &&
      (formData.praScore < 0 || formData.praScore > 100)
    ) {
      newErrors.praScore = "PRA Score must be between 0 and 100.";
    }
    if (formData.ageDiff < 0 || formData.ageDiff > 100) {
      newErrors.ageDiff = "Age Difference must be between 0 and 100.";
    }
    if (formData.urgentScore < 0 || formData.urgentScore > 10) {
      newErrors.urgentScore = "Urgent Score must be between 0 and 10.";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log(formData);

    return (
      <form onSubmit={handleSubmit} className="cute-form">
        <h2>Transplant Data Input</h2>

        <label htmlFor="age">Age (0-100):</label>
        <input
          type="number"
          id="age"
          name="age"
          min="0"
          max="100"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <span className="error">{errors.age}</span>
        <br />
        <br />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />

        <label htmlFor="bp">BP (50-200):</label>
        <input
          type="number"
          id="bp"
          name="bp"
          min="50"
          max="200"
          value={formData.bp}
          onChange={handleChange}
          required
        />
        <span className="error">{errors.bp}</span>
        <br />
        <br />

        <label htmlFor="heartAttack">Heart Attack:</label>
        <select
          id="heartAttack"
          name="heartAttack"
          value={formData.heartAttack}
          onChange={handleChange}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <br />
        <br />

        <label htmlFor="heartValve">Heart Valve:</label>
        <select
          id="heartValve"
          name="heartValve"
          value={formData.heartValve}
          onChange={handleChange}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <br />
        <br />

        <label htmlFor="heartDefectAtBirth">Heart Defect at Birth:</label>
        <select
          id="heartDefectAtBirth"
          name="heartDefectAtBirth"
          value={formData.heartDefectAtBirth}
          onChange={handleChange}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <br />
        <br />

        <label htmlFor="severeCysticFibrosis">Severe Cystic Fibrosis:</label>
        <select
          id="severeCysticFibrosis"
          name="severeCysticFibrosis"
          value={formData.severeCysticFibrosis}
          onChange={handleChange}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <br />
        <br />

        <label htmlFor="cardiomyopathy">Cardiomyopathy:</label>
        <select
          id="cardiomyopathy"
          name="cardiomyopathy"
          value={formData.cardiomyopathy}
          onChange={handleChange}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <br />
        <br />

        <label htmlFor="copd">COPD:</label>
        <select
          id="copd"
          name="copd"
          value={formData.copd}
          onChange={handleChange}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <br />
        <br />

        <label htmlFor="repeatedUrinaryInfections">
          Repeated Urinary Infections:
        </label>
        <select
          id="repeatedUrinaryInfections"
          name="repeatedUrinaryInfections"
          value={formData.repeatedUrinaryInfections}
          onChange={handleChange}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <br />
        <br />

        <label htmlFor="diabetes">Diabetes:</label>
        <select
          id="diabetes"
          name="diabetes"
          value={formData.diabetes}
          onChange={handleChange}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <br />
        <br />

        <label htmlFor="bloodTypeMatch">Blood Type Match:</label>
        <select
          id="bloodTypeMatch"
          name="bloodTypeMatch"
          value={formData.bloodTypeMatch}
          onChange={handleChange}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <br />
        <br />

        <label htmlFor="hlaMatchScore">HLA Match Score (0-100):</label>
        <input
          type="number"
          id="hlaMatchScore"
          name="hlaMatchScore"
          min="0"
          max="100"
          value={formData.hlaMatchScore || ""}
          onChange={handleChange}
        />
        <span className="error">{errors.hlaMatchScore}</span>
        <br />
        <br />

        <label htmlFor="crossmatchResult">Crossmatch Result:</label>
        <select
          id="crossmatchResult"
          name="crossmatchResult"
          value={formData.crossmatchResult}
          onChange={handleChange}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <br />
        <br />

        <label htmlFor="praScore">PRA Score (0-100):</label>
        <input
          type="number"
          id="praScore"
          name="praScore"
          min="0"
          max="100"
          value={formData.praScore || ""}
          onChange={handleChange}
        />
        <span className="error">{errors.praScore}</span>
        <br />
        <br />

        <label htmlFor="ageDiff">Age Difference (0-100):</label>
        <input
          type="number"
          id="ageDiff"
          name="ageDiff"
          min="0"
          max="100"
          value={formData.ageDiff}
          onChange={handleChange}
          required
        />
        <span className="error">{errors.ageDiff}</span>
        <br />
        <br />

        <label htmlFor="urgentScore">Urgent Score (0-10):</label>
        <input
          type="number"
          id="urgentScore"
          name="urgentScore"
          min="0"
          max="10"
          value={formData.urgentScore}
          onChange={handleChange}
          required
        />
        <span className="error">{errors.urgentScore}</span>
        <br />
        <br />

        <label htmlFor="compatible">Compatible:</label>
        <select
          id="compatible"
          name="compatible"
          value={formData.compatible}
          onChange={handleChange}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <br />
        <br />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    );
  };
};

export default CuteForm;
