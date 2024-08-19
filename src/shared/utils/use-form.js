import { useState } from "react"
import { TemporalDate } from "./date";

/**
 * @typedef {Object} FormConfig
 * @property {Object} initialValue
 * */

/** 
 * @param {FormConfig} config
 * */
export const useForm = (config) => {
  const [data, setData] = useState(config?.initialValue ?? {})

  const handleSubmit = (submitCallback) => (e) => {
    e.preventDefault();
    submitCallback(data, { reset });
  }

  const reset = () => setData(config?.initialValue ?? {})

  const setInitialValue = (values) => setData(values)

  const register = (name, type) => ({
    name,
    type,
    value: type !== 'date' ? data[name] : TemporalDate.format(new Date(data[name]), 'YYYY-MM-DD'),
    onChange: (e) => {
      const value = type !== 'checkbox' ? e.target.value : e.target.checked;
      setData({ ...data, [name]: value })
    }
  })

  const setValue = (name, value) => setData({ ...data, [name]: value })

  return {
    values: data,
    handleSubmit,
    reset,
    setInitialValue,
    setValue,
    register,
  }

}
