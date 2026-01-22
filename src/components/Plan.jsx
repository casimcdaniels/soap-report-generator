function Plan({ formData, onChange }) {
  return (
    <div className="form-group">
      <h2>Plan/Disposition</h2>
      <div className="form-field">
        <label htmlFor="plan">Plan/Disposition</label>
        <textarea
          id="plan"
          value={formData.plan}
          onChange={(e) => onChange('plan', e.target.value)}
          rows="5"
          placeholder="e.g., Pt referred to ophthamologist upstairs"
        />
      </div>
    </div>
  )
}

export default Plan
