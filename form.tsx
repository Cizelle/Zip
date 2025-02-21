import React, { useState } from "react";
import "./Form.css"; 
interface FormData {
  age: number;
  bp: number;
  bloodMatch: string;
  hlaMatchScore: number | null;
  crossmatchResult: string;
  praScore: number | null;
  ageDiff: number;
  sizeCompatibility: string;
  urgency: number;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    age: 0,
    bp: 50,
    bloodMatch: "yes",
    hlaMatchScore: null,
    crossmatchResult: "yes",
    praScore: null,
    ageDiff: 0,
    sizeCompatibility: "yes",
    urgency: 1,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    const parsedValue = type === "number" ? parseInt(value, 10) : value; 

    setFormData({ ...formData, [name]: parsedValue });
    setErrors({ ...errors, [name]: "" }); 

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors = {};

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
    if (formData.urgency < 1 || formData.urgency > 10) {
      newErrors.urgency = "Urgency must be between 1 and 10.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return; 
    }

    console.log(formData); 
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Age */}
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

      {/* BP */}
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

      {/* Blood Match */}
      <label htmlFor="bloodMatch">Blood Match:</label>
      <select
        id="bloodMatch"
        name="bloodMatch"
        value={formData.bloodMatch}
        onChange={handleChange}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br />
      <br />

      {/* HLA Match Score */}
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

      {/* Crossmatch Result */}
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

      {/* PRA Score */}
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

      {/* Age Difference */}
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

      {/* Size Compatibility */}
      <label htmlFor="sizeCompatibility">Size Compatibility:</label>
      <select
        id="sizeCompatibility"
        name="sizeCompatibility"
        value={formData.sizeCompatibility}
        onChange={handleChange}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br />
      <br />

      {/* Urgency */}
      <label htmlFor="urgency">Urgency (1-10):</label>
      <input
        type="number"
        id="urgency"
        name="urgency"
        min="1"
        max="10"
        value={formData.urgency}
        onChange={handleChange}
        required
      />
      <span className="error">{errors.urgency}</span>
      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
