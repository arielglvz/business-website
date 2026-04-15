export function updateFormField(setForm, field, value, setErrors, validator) {
  // update form state
  setForm((prev) => ({
    ...prev,
    [field]: value,
  }))

  // handle validation dynamically
  if (validator) {
    const error = validator(value)

    setErrors((prev) => ({
      ...prev,
      [field]: error || "",
    }))
  }
}
