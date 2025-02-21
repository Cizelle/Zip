const form = document.getElementById("transplantForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const errorSpans = document.querySelectorAll(".error");
  errorSpans.forEach((span) => (span.textContent = ""));

  const formData = new FormData(form);
  const data = {};
  let isValid = true;

  formData.forEach((value, key) => {
    data[key] = value;
  });

  if (data.age < 0 || data.age > 100) {
    document.getElementById("ageError").textContent =
      "Age must be between 0 and 100.";
    isValid = false;
  }
  if (data.bp < 50 || data.bp > 200) {
    document.getElementById("bpError").textContent =
      "BP must be between 50 and 200.";
    isValid = false;
  }
  if (
    data.hla_match_score !== "" &&
    (data.hla_match_score < 0 || data.hla_match_score > 100)
  ) {
    document.getElementById("hlaError").textContent =
      "HLA Match Score must be between 0 and 100.";
    isValid = false;
  }
  if (data.pra_score !== "" && (data.pra_score < 0 || data.pra_score > 100)) {
    document.getElementById("praError").textContent =
      "PRA Score must be between 0 and 100.";
    isValid = false;
  }
  if (data.age_diff !== "" && (data.age_diff < 0 || data.age_diff > 100)) {
    document.getElementById("ageDiffError").textContent =
      "Age Difference must be between 0 and 100.";
    isValid = false;
  }
  if (data.urgency_score < 1 || data.urgency_score > 10) {
    document.getElementById("urgencyError").textContent =
      "Urgency Score must be between 1 and 10.";
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  console.log(data);

  fetch("/api/transplant", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success:", result);
      alert("Data submitted successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred during submission.");
    });
});
