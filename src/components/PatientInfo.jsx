import TimeInput from './TimeInput'

function PatientInfo({ formData, onChange }) {
  return (
    <div className="form-group patient-info-group">
        <h2><i className="fas fa-id-card"></i> Patient Information</h2>
      <div className="patient-info-vertical">
        <div className="form-field patient-info-field patient-info-age-field">
          <label htmlFor="ageYears">Age</label>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-end' }}>
            <div style={{ flex: 1 }}>
              <input
                type="number"
                id="ageYears"
                value={formData.ageYears}
                onChange={(e) => onChange('ageYears', e.target.value)}
                min="0"
                placeholder="Y"
                className="patient-info-input"
              />
              <span style={{ fontSize: '0.7em', color: '#666', display: 'block', marginTop: '1px' }}>Years</span>
            </div>
            <div style={{ flex: 1 }}>
              <input
                type="number"
                id="ageMonths"
                value={formData.ageMonths}
                onChange={(e) => onChange('ageMonths', e.target.value)}
                min="0"
                max="11"
                placeholder="M"
                className="patient-info-input"
              />
              <span style={{ fontSize: '0.7em', color: '#666', display: 'block', marginTop: '1px' }}>Months</span>
            </div>
          </div>
        </div>
        <div className="form-field patient-info-field patient-info-sex-field">
          <label htmlFor="gender">Sex</label>
          <select
            id="gender"
            value={formData.gender}
            onChange={(e) => onChange('gender', e.target.value)}
            required
            className="patient-info-input patient-info-sex-select"
          >
            <option value="">-</option>
            <option value="M">M</option>
            <option value="F">F</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-field patient-info-field patient-info-weight-field">
          <label htmlFor="weight">Weight</label>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-end' }}>
            <input
              type="number"
              id="weight"
              value={formData.weight}
              onChange={(e) => onChange('weight', e.target.value)}
              min="0"
              step="0.1"
              placeholder="Weight"
              style={{ flex: 1 }}
              className="patient-info-input"
            />
            <select
              id="weightUnit"
              value={formData.weightUnit}
              onChange={(e) => onChange('weightUnit', e.target.value)}
              style={{ width: '70px' }}
              className="patient-info-input"
            >
              <option value="lbs">lbs</option>
              <option value="kg">kg</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientInfo
