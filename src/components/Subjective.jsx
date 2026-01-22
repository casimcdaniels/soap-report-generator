function Subjective({ formData, onChange }) {
  return (
    <>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="chiefComplaint"><i className="fas fa-exclamation-triangle"></i> Chief Complaint</label>
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
          <label htmlFor="symptoms"><i className="fas fa-notes-medical"></i> S - Signs & Symptoms</label>
          <textarea
            id="symptoms"
            value={formData.symptoms}
            onChange={(e) => onChange('symptoms', e.target.value)}
            rows="3"
            placeholder="e.g., Chest pain 7/10, shortness of breath, headache, neck pain, left arm pain. Patient states airbag deployed"
          />
        </div>
        <div className="form-field">
          <label htmlFor="allergies"><i className="fas fa-allergies"></i> A - Allergies</label>
          <input
            type="text"
            id="allergies"
            value={formData.allergies}
            onChange={(e) => onChange('allergies', e.target.value)}
            placeholder="e.g., NKDA, no known allergies"
          />
        </div>
        <div className="form-field">
          <label htmlFor="medications"><i className="fas fa-pills"></i> M - Medications</label>
          <input
            type="text"
            id="medications"
            value={formData.medications}
            onChange={(e) => onChange('medications', e.target.value)}
            placeholder="e.g., Aspirin 81mg daily, Metoprolol 25mg BID"
          />
        </div>
        <div className="form-field">
          <label htmlFor="pastHistory"><i className="fas fa-file-medical-alt"></i> P - Past Medical History</label>
          <input
            type="text"
            id="pastHistory"
            value={formData.pastHistory}
            onChange={(e) => onChange('pastHistory', e.target.value)}
            placeholder="e.g., Hypertension, history of anxiety, no prior cardiac events"
          />
        </div>
        <div className="form-field">
          <label htmlFor="lastOral"><i className="fas fa-utensils"></i> L - Last Oral Intake</label>
          <input
            type="text"
            id="lastOral"
            value={formData.lastOral}
            onChange={(e) => onChange('lastOral', e.target.value)}
            placeholder="e.g., Last ate lunch at 1200, last drank water at 1300"
          />
        </div>
        <div className="form-field">
          <label htmlFor="events"><i className="fas fa-car-crash"></i> E - Events Leading to Injury/Illness</label>
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
          <label htmlFor="onset"><i className="fas fa-play-circle"></i> O - Onset</label>
          <input
            type="text"
            id="onset"
            value={formData.onset}
            onChange={(e) => onChange('onset', e.target.value)}
            placeholder="e.g., Immediate onset at time of impact, approximately 30 minutes ago"
          />
        </div>
        <div className="form-field">
          <label htmlFor="provokes"><i className="fas fa-arrows-alt"></i> P - Provokes/Palliates</label>
          <input
            type="text"
            id="provokes"
            value={formData.provokes}
            onChange={(e) => onChange('provokes', e.target.value)}
            placeholder="e.g., Worsened with deep breathing and movement. Slightly improved when sitting still"
          />
        </div>
        <div className="form-field">
          <label htmlFor="quality"><i className="fas fa-shapes"></i> Q - Quality</label>
          <input
            type="text"
            id="quality"
            value={formData.quality}
            onChange={(e) => onChange('quality', e.target.value)}
            placeholder="e.g., Sharp, crushing chest pain, pressure sensation"
          />
        </div>
        <div className="form-field">
          <label htmlFor="radiation"><i className="fas fa-arrows-alt-h"></i> R - Radiation</label>
          <input
            type="text"
            id="radiation"
            value={formData.radiation}
            onChange={(e) => onChange('radiation', e.target.value)}
            placeholder="e.g., Pain in center of chest, radiates to left arm and jaw"
          />
        </div>
        <div className="form-field">
          <label htmlFor="severity"><i className="fas fa-chart-line"></i> S - Severity (1-10)</label>
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
          <label htmlFor="time"><i className="fas fa-stopwatch"></i> T - Time</label>
          <input
            type="text"
            id="time"
            value={formData.time}
            onChange={(e) => onChange('time', e.target.value)}
            placeholder="e.g., Started at time of impact (1330), constant since onset, no relief"
          />
        </div>
      </div>

      <div className="form-group">
        <h2><i className="fas fa-clipboard-list"></i> General Assessment</h2>
        <div className="form-field">
          <label htmlFor="generalAssessment"><i className="fas fa-user-injured"></i> Patient Presentation</label>
          <textarea
            id="generalAssessment"
            value={formData.generalAssessment}
            onChange={(e) => onChange('generalAssessment', e.target.value)}
            rows="3"
            placeholder="e.g., 32-year-old female found on backboard with C-collar in place, zone 1, bed 3. Patient appears anxious, diaphoretic, alert and oriented x4, cooperative. Patient arrived via EMS"
          />
        </div>
      </div>
    </>
  )
}

export default Subjective
