function Plan({ formData, onChange }) {
  return (
    <div className="form-group">
        <h2><i className="fas fa-route"></i> Plan/Disposition</h2>
      <div className="form-field">
        <label htmlFor="plan"><i className="fas fa-tasks"></i> Plan/Disposition</label>
        <textarea
          id="plan"
          value={formData.plan}
          onChange={(e) => onChange('plan', e.target.value)}
          rows="5"
          placeholder="e.g., C-spine cleared by physician, backboard removed. EKG obtained, troponin ordered. Chest X-ray ordered. Continue monitoring vitals. Disposition pending imaging results and cardiac workup."
        />
      </div>
    </div>
  )
}

export default Plan
