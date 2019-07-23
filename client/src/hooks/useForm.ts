import React, { useState } from 'react'

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState<any>(initialValues)

  return [
    values,
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    },
    setValues
  ]
}
// <input name="email" value={values.email} onChange={handleChange} />
