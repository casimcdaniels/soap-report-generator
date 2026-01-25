function Subjective({ formData, onChange }) {
  return (
    <>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="chiefComplaint">Chief Complaint</label>
          <input
            type="text"
            id="chiefComplaint"
            value={formData.chiefComplaint}
            onChange={(e) => onChange('chiefComplaint', e.target.value)}
            placeholder="e.g., MVC, chest pain, possible head injury"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <h2><i className="fas fa-history"></i> SAMPLE History</h2>
        <div className="form-field">
          <label htmlFor="symptoms">S - Symptoms</label>
          <textarea
            id="symptoms"
            value={formData.symptoms}
            onChange={(e) => onChange('symptoms', e.target.value)}
            rows="3"
            placeholder="e.g., Chest pain 7/10, shortness of breath, headache, neck pain, left arm pain. Patient states airbag deployed"
          />
        </div>
        <div className="form-field">
          <label htmlFor="allergies">A - Allergies</label>
          <input
            type="text"
            id="allergies"
            value={formData.allergies}
            onChange={(e) => onChange('allergies', e.target.value)}
            placeholder="e.g., NKDA, no known allergies"
          />
        </div>
        <div className="form-field">
          <label htmlFor="medications">M - Medications</label>
          <input
            type="text"
            id="medications"
            value={formData.medications}
            onChange={(e) => onChange('medications', e.target.value)}
            placeholder="e.g., Aspirin 81mg daily, Metoprolol 25mg BID"
          />
        </div>
        <div className="form-field">
          <label htmlFor="pastHistory">P - Pertinent Medical History</label>
          <input
            type="text"
            id="pastHistory"
            value={formData.pastHistory}
            onChange={(e) => onChange('pastHistory', e.target.value)}
            placeholder="e.g., Hypertension, history of anxiety, no prior cardiac events"
          />
        </div>
        <div className="form-field">
          <label htmlFor="last">L - Last</label>
          <input
            type="text"
            id="last"
            value={formData.last}
            onChange={(e) => onChange('last', e.target.value)}
            placeholder="e.g., Last ate lunch at 1200, last drank water at 1300"
          />
        </div>
        <div className="form-field">
          <label htmlFor="events">E - Events Leading to Injury/Illness</label>
          <textarea
            id="events"
            value={formData.events}
            onChange={(e) => onChange('events', e.target.value)}
            rows="2"
            placeholder="e.g., Patient was driver in MVC, rear-ended at approximately 45 mph. Airbag deployed. Patient was wearing seatbelt. No loss of consciousness reported"
          />
        </div>
      </div>

      <div className="form-group">
        <h2><i className="fas fa-question-circle"></i> OPQRST</h2>
        <div className="form-field">
          <label htmlFor="onset">O - Onset</label>
          <input
            type="text"
            id="onset"
            value={formData.onset}
            onChange={(e) => onChange('onset', e.target.value)}
            placeholder="e.g., Immediate onset at time of impact, approximately 30 minutes ago"
          />
        </div>
        <div className="form-field">
          <label htmlFor="provokes">P - Provokes/Palliates</label>
          <input
            type="text"
            id="provokes"
            value={formData.provokes}
            onChange={(e) => onChange('provokes', e.target.value)}
            placeholder="e.g., Worsened with deep breathing and movement. Slightly improved when sitting still"
          />
        </div>
        <div className="form-field">
          <label htmlFor="quality">Q - Quality</label>
          <input
            type="text"
            id="quality"
            value={formData.quality}
            onChange={(e) => onChange('quality', e.target.value)}
            placeholder="e.g., Sharp, crushing chest pain, pressure sensation"
          />
        </div>
        <div className="form-field">
          <label htmlFor="radiation">R - Radiation</label>
          <input
            type="text"
            id="radiation"
            value={formData.radiation}
            onChange={(e) => onChange('radiation', e.target.value)}
            placeholder="e.g., Pain in center of chest, radiates to left arm and jaw"
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
            placeholder="e.g., 7"
          />
        </div>
        <div className="form-field">
          <label htmlFor="time">T - Time</label>
          <input
            type="text"
            id="time"
            value={formData.time}
            onChange={(e) => onChange('time', e.target.value)}
            placeholder="e.g., Started at time of impact (1330), constant since onset, no relief"
          />
        </div>
      </div>
    </>
  )
}

export default Subjective
