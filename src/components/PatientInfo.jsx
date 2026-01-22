import TimeInput from './TimeInput'

function PatientInfo({ formData, onChange }) {
  return (
    <div className="form-group">
        <h2><i className="fas fa-id-card"></i> Patient Information</h2>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="age"><i className="fas fa-birthday-cake"></i> Age</label>
          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={(e) => onChange('age', e.target.value)}
            min="0"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="gender"><i className="fas fa-venus-mars"></i> Sex</label>
          <select
            id="gender"
            value={formData.gender}
            onChange={(e) => onChange('gender', e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="M">M</option>
            <option value="F">F</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default PatientInfo
