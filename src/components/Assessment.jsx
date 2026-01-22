function Assessment({ formData, onChange }) {
  return (
    <div className="form-group">
      <h2>Assessment/Impression</h2>
      <div className="form-field">
        <label htmlFor="assessment">Assessment/Impression</label>
        <textarea
          id="assessment"
          value={formData.assessment}
          onChange={(e) => onChange('assessment', e.target.value)}
          rows="5"
          placeholder="e.g., Acute left eye pain with vision loss OS; ED physician concerned for acute angle-closure glaucoma."
        />
      </div>
    </div>
  )
}

export default Assessment
