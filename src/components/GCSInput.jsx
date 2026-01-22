function GCSInput({ formData, onChange }) {
  const eyes = formData.gcsEyes || ''
  const verbal = formData.gcsVerbal || ''
  const motor = formData.gcsMotor || ''
  
  const total = eyes && verbal && motor 
    ? parseInt(eyes) + parseInt(verbal) + parseInt(motor) 
    : ''

  const handleChange = (field, value) => {
    onChange(field, value)
    // Auto-calculate total
    const newEyes = field === 'gcsEyes' ? value : eyes
    const newVerbal = field === 'gcsVerbal' ? value : verbal
    const newMotor = field === 'gcsMotor' ? value : motor
    
    if (newEyes && newVerbal && newMotor) {
      const calculatedTotal = parseInt(newEyes) + parseInt(newVerbal) + parseInt(newMotor)
      onChange('gcsTotal', calculatedTotal.toString())
    } else {
      onChange('gcsTotal', '')
    }
  }

  return (
    <div className="gcs-container">
      <div className="gcs-fields">
        <div className="gcs-component">
          <label htmlFor="gcsEyes"><i className="fas fa-eye"></i> Eyes</label>
          <select
            id="gcsEyes"
            value={eyes}
            onChange={(e) => handleChange('gcsEyes', e.target.value)}
            className="gcs-select"
          >
            <option value="">Select</option>
            <option value="4">4 - Spontaneous</option>
            <option value="3">3 - To voice</option>
            <option value="2">2 - To pain</option>
            <option value="1">1 - None</option>
          </select>
        </div>
        <div className="gcs-component">
          <label htmlFor="gcsVerbal"><i className="fas fa-comments"></i> Verbal</label>
          <select
            id="gcsVerbal"
            value={verbal}
            onChange={(e) => handleChange('gcsVerbal', e.target.value)}
            className="gcs-select"
          >
            <option value="">Select</option>
            <option value="5">5 - Oriented</option>
            <option value="4">4 - Confused</option>
            <option value="3">3 - Inappropriate words</option>
            <option value="2">2 - Incomprehensible sounds</option>
            <option value="1">1 - None</option>
          </select>
        </div>
        <div className="gcs-component">
          <label htmlFor="gcsMotor"><i className="fas fa-hand-rock"></i> Motor</label>
          <select
            id="gcsMotor"
            value={motor}
            onChange={(e) => handleChange('gcsMotor', e.target.value)}
            className="gcs-select"
          >
            <option value="">Select</option>
            <option value="6">6 - Obeys commands</option>
            <option value="5">5 - Localizes pain</option>
            <option value="4">4 - Withdraws from pain</option>
            <option value="3">3 - Flexion (decorticate)</option>
            <option value="2">2 - Extension (decerebrate)</option>
            <option value="1">1 - None</option>
          </select>
        </div>
        {total && (
          <div className="gcs-total-display">
            <span className="gcs-total-value">{total}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default GCSInput
