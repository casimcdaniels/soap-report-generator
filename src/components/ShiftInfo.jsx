import TimeInput from './TimeInput'

function ShiftInfo({ formData, onChange }) {
  return (
    <div className="form-group">
      <h2><i className="fas fa-calendar-check"></i> Encounter</h2>
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
    </div>
  )
}

export default ShiftInfo
