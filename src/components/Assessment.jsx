function Assessment({ formData, onChange }) {
  return (
    <div className="form-group">
        <h2><i className="fas fa-diagnoses"></i> Assessment/Impression</h2>
      <div className="form-field">
        <label htmlFor="assessment">Assessment/Impression</label>
        <textarea
          id="assessment"
          value={formData.assessment}
          onChange={(e) => onChange('assessment', e.target.value)}
          rows="5"
          placeholder="e.g., MVC with possible chest wall injury, rule out cardiac contusion. Patient presents with chest pain, SOB, and tenderness following MVC with airbag deployment. C-spine precautions maintained."
        />
      </div>
    </div>
  )
}

export default Assessment
