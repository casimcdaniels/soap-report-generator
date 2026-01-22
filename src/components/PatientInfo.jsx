function PatientInfo({ formData, onChange }) {
  return (
    <div className="form-group">
      <h2>Patient Information</h2>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="age">Age</label>
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
          <label htmlFor="gender">Gender</label>
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
      <div className="form-field">
        <label htmlFor="chiefComplaint">Chief Complaint</label>
        <input
          type="text"
          id="chiefComplaint"
          value={formData.chiefComplaint}
          onChange={(e) => onChange('chiefComplaint', e.target.value)}
          placeholder="e.g., Left eye pain and sensitivity"
          required
        />
      </div>
    </div>
  )
}

export default PatientInfo
