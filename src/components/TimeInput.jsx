function TimeInput({ id, value, onChange, required, placeholder = "19:15" }) {
  const handleChange = (e) => {
    const inputValue = e.target.value
    // Allow only numbers and colon, format as HH:MM
    const formatted = inputValue
      .replace(/[^\d:]/g, '')
      .replace(/^(\d{2})(\d)/, '$1:$2')
      .replace(/^(\d{2}):(\d{2}).*/, '$1:$2')
    if (formatted.match(/^([0-1]?[0-9]|2[0-3]):?([0-5]?[0-9])?$/) || formatted === '') {
      onChange(formatted)
    }
  }

  const handleBlur = (e) => {
    const value = e.target.value
    if (value && value.length > 0) {
      const parts = value.split(':')
      const hours = parts[0] ? parts[0].padStart(2, '0').slice(0, 2) : '00'
      const minutes = parts[1] ? parts[1].padStart(2, '0').slice(0, 2) : '00'
      const formatted = `${hours}:${minutes}`
      if (formatted.match(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/)) {
        onChange(formatted)
      }
    }
  }

  return (
    <input
      type="text"
      id={id}
      value={value || ''}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      pattern="([0-1][0-9]|2[0-3]):[0-5][0-9]"
      required={required}
    />
  )
}

export default TimeInput
