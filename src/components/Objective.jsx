import TimeInput from './TimeInput'

function Objective({ formData, onChange }) {
  return (
    <>
      <div className="form-group">
        <h2>Physical Exam</h2>
        <div className="form-field">
          <label htmlFor="physicalExam">Physical Exam Findings</label>
          <textarea
            id="physicalExam"
            value={formData.physicalExam}
            onChange={(e) => onChange('physicalExam', e.target.value)}
            rows="5"
            placeholder="LOC: alert and oriented, aox4&#10;GCS: 15&#10;Airway: patent&#10;Breathing: equal and adequate bilateral chest rise&#10;Circulation: strong, radial pulse&#10;Skin: warm, pink&#10;HEENT: PERRLA at 4mm"
          />
        </div>
      </div>

      <div className="form-group">
        <h2>Vitals</h2>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="vitalTime">Time (24-hour, HH:MM)</label>
            <TimeInput
              id="vitalTime"
              value={formData.vitalTime}
              onChange={(value) => onChange('vitalTime', value)}
              placeholder="19:15"
            />
          </div>
          <div className="form-field">
            <label htmlFor="pulse">Pulse (bpm)</label>
            <input
              type="number"
              id="pulse"
              value={formData.pulse}
              onChange={(e) => onChange('pulse', e.target.value)}
              min="0"
            />
          </div>
          <div className="form-field">
            <label htmlFor="respRate">RR (breaths/min)</label>
            <input
              type="number"
              id="respRate"
              value={formData.respRate}
              onChange={(e) => onChange('respRate', e.target.value)}
              min="0"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="bpSystolic">BP Systolic</label>
            <input
              type="number"
              id="bpSystolic"
              value={formData.bpSystolic}
              onChange={(e) => onChange('bpSystolic', e.target.value)}
              min="0"
            />
          </div>
          <div className="form-field">
            <label htmlFor="bpDiastolic">BP Diastolic</label>
            <input
              type="number"
              id="bpDiastolic"
              value={formData.bpDiastolic}
              onChange={(e) => onChange('bpDiastolic', e.target.value)}
              min="0"
            />
          </div>
          <div className="form-field">
            <label htmlFor="temp">Temp (°F)</label>
            <input
              type="number"
              id="temp"
              value={formData.temp}
              onChange={(e) => onChange('temp', e.target.value)}
              step="0.1"
              min="0"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="spo2">SpO2 (%)</label>
            <input
              type="number"
              id="spo2"
              value={formData.spo2}
              onChange={(e) => onChange('spo2', e.target.value)}
              min="0"
              max="100"
            />
          </div>
          <div className="form-field">
            <label htmlFor="glucose">Glucose (mg/dL)</label>
            <input
              type="number"
              id="glucose"
              value={formData.glucose}
              onChange={(e) => onChange('glucose', e.target.value)}
              min="0"
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <h2>Interventions & Timeline</h2>
        <div className="form-field">
          <label htmlFor="interventions">Interventions and Timeline</label>
          <textarea
            id="interventions"
            value={formData.interventions}
            onChange={(e) => onChange('interventions', e.target.value)}
            rows="5"
            placeholder="1915: initial vitals.&#10;1920: gave warm blanket for comfort&#10;1925: attending doc measured eye pressure at 40 mmhg"
          />
        </div>
      </div>
    </>
  )
}

export default Objective
