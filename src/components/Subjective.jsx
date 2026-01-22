function Subjective({ formData, onChange }) {
  return (
    <>
      <div className="form-group">
        <h2>SAMPLE History</h2>
        <div className="form-field">
          <label htmlFor="symptoms">S - Signs & Symptoms</label>
          <textarea
            id="symptoms"
            value={formData.symptoms}
            onChange={(e) => onChange('symptoms', e.target.value)}
            rows="3"
            placeholder="e.g., pain in / behind left eye, blurry vision, nausea"
          />
        </div>
        <div className="form-field">
          <label htmlFor="allergies">A - Allergies</label>
          <input
            type="text"
            id="allergies"
            value={formData.allergies}
            onChange={(e) => onChange('allergies', e.target.value)}
            placeholder="e.g., none, penicillin"
          />
        </div>
        <div className="form-field">
          <label htmlFor="medications">M - Medications</label>
          <input
            type="text"
            id="medications"
            value={formData.medications}
            onChange={(e) => onChange('medications', e.target.value)}
            placeholder="e.g., insulin"
          />
        </div>
        <div className="form-field">
          <label htmlFor="pastHistory">P - Past Medical History</label>
          <input
            type="text"
            id="pastHistory"
            value={formData.pastHistory}
            onChange={(e) => onChange('pastHistory', e.target.value)}
            placeholder="e.g., type I diabetic, chronic hypertension"
          />
        </div>
        <div className="form-field">
          <label htmlFor="lastOral">L - Last Oral Intake</label>
          <input
            type="text"
            id="lastOral"
            value={formData.lastOral}
            onChange={(e) => onChange('lastOral', e.target.value)}
            placeholder="e.g., yesterday at dinner time"
          />
        </div>
        <div className="form-field">
          <label htmlFor="events">E - Events Leading to Injury/Illness</label>
          <textarea
            id="events"
            value={formData.events}
            onChange={(e) => onChange('events', e.target.value)}
            rows="2"
            placeholder="e.g., working"
          />
        </div>
      </div>

      <div className="form-group">
        <h2>OPQRST</h2>
        <div className="form-field">
          <label htmlFor="onset">O - Onset</label>
          <input
            type="text"
            id="onset"
            value={formData.onset}
            onChange={(e) => onChange('onset', e.target.value)}
            placeholder="e.g., quick, gradual"
          />
        </div>
        <div className="form-field">
          <label htmlFor="provokes">P - Provokes/Palliates</label>
          <input
            type="text"
            id="provokes"
            value={formData.provokes}
            onChange={(e) => onChange('provokes', e.target.value)}
            placeholder="e.g., bright lights make it worse"
          />
        </div>
        <div className="form-field">
          <label htmlFor="quality">Q - Quality</label>
          <input
            type="text"
            id="quality"
            value={formData.quality}
            onChange={(e) => onChange('quality', e.target.value)}
            placeholder="e.g., feels like screw driver into eye"
          />
        </div>
        <div className="form-field">
          <label htmlFor="radiation">R - Radiation</label>
          <input
            type="text"
            id="radiation"
            value={formData.radiation}
            onChange={(e) => onChange('radiation', e.target.value)}
            placeholder="e.g., dull pain radiating towards left temple"
          />
        </div>
        <div className="form-field">
          <label htmlFor="severity">S - Severity (1-10)</label>
          <input
            type="number"
            id="severity"
            value={formData.severity}
            onChange={(e) => onChange('severity', e.target.value)}
            min="1"
            max="10"
            placeholder="e.g., 11/10"
          />
        </div>
        <div className="form-field">
          <label htmlFor="time">T - Time</label>
          <input
            type="text"
            id="time"
            value={formData.time}
            onChange={(e) => onChange('time', e.target.value)}
            placeholder="e.g., started at 6pm yesterday, constant since onset"
          />
        </div>
      </div>

      <div className="form-group">
        <h2>General Assessment</h2>
        <div className="form-field">
          <label htmlFor="generalAssessment">Patient Presentation</label>
          <textarea
            id="generalAssessment"
            value={formData.generalAssessment}
            onChange={(e) => onChange('generalAssessment', e.target.value)}
            rows="3"
            placeholder="e.g., Pt found lying on hospital bed in zone 2 sw-5, calm, alert and oriented"
          />
        </div>
      </div>
    </>
  )
}

export default Subjective
