import { useState } from "react"

export function useForm(initialValues, validators = {}) {
  const [form, setForm] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // update + validate single field
  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }))

    if (validators[field]) {
      const error = validators[field](value)

      setErrors((prev) => ({
        ...prev,
        [field]: error || "",
      }))
    }
  }

  // full validation
  const validate = () => {
    const newErrors = {}

    Object.keys(validators).forEach((field) => {
      const error = validators[field](form[field])
      if (error) newErrors[field] = error
    })

    return newErrors
  }

  // submit handler wrapper
  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault()

    setIsSubmitted(true)

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    onSubmit(form)
  }

  return {
    form,
    errors,
    isSubmitted,
    updateField,
    handleSubmit,
  }
}
