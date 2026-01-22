import TimeInput from './TimeInput'

function PatientInfo({ formData, onChange }) {
  return (
    <div className="form-group">
      <h2>Patient Information</h2>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="shiftType">Shift Type</label>
          <select
            id="shiftType"
            value={formData.shiftType}
            onChange={(e) => onChange('shiftType', e.target.value)}
          >
            <option value="ER">ER</option>
            <option value="EMT">Ride-Along</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => onChange('date', e.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="startTime">Start Time (24-hour, HH:MM)</label>
          <TimeInput
            id="startTime"
            value={formData.startTime}
            onChange={(value) => onChange('startTime', value)}
            placeholder="17:00"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="endTime">End Time (24-hour, HH:MM)</label>
          <TimeInput
            id="endTime"
            value={formData.endTime}
            onChange={(value) => onChange('endTime', value)}
            placeholder="07:00"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="encounterTime">Encounter Time (24-hour, HH:MM)</label>
          <TimeInput
            id="encounterTime"
            value={formData.encounterTime}
            onChange={(value) => onChange('encounterTime', value)}
            placeholder="19:15"
            required
          />
        </div>
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
