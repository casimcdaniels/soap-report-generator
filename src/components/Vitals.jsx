import { useState } from 'react'
import TimeInput from './TimeInput'

function Vitals({ vitals, onChange }) {
  const [newTime, setNewTime] = useState('')
  const [newPulse, setNewPulse] = useState('')
  const [newRespRate, setNewRespRate] = useState('')
  const [newBpSystolic, setNewBpSystolic] = useState('')
  const [newBpDiastolic, setNewBpDiastolic] = useState('')
  const [newTemp, setNewTemp] = useState('')
  const [newSpo2, setNewSpo2] = useState('')
  const [newGlucose, setNewGlucose] = useState('')
  const [newNotes, setNewNotes] = useState('')

  const handleAdd = () => {
    if (newTime) {
      const vitalParts = []
      if (newPulse) vitalParts.push(`P: ${newPulse}`)
      if (newRespRate) vitalParts.push(`RR: ${newRespRate}`)
      if (newBpSystolic && newBpDiastolic) vitalParts.push(`BP: ${newBpSystolic}/${newBpDiastolic}`)
      if (newTemp) vitalParts.push(`Temp: ${newTemp}°F`)
      if (newSpo2) vitalParts.push(`SpO2: ${newSpo2}%`)
      if (newGlucose) vitalParts.push(`Glucose: ${newGlucose} mg/dL`)
      
      let vitalText = vitalParts.join(', ')
      if (newNotes.trim()) {
        vitalText += (vitalParts.length > 0 ? ', ' : '') + newNotes.trim()
      }

      if (vitalParts.length > 0 || newNotes.trim()) {
        const updated = [...(vitals || []), { 
          time: newTime, 
          type: 'vitals',
          pulse: newPulse,
          respRate: newRespRate,
          bpSystolic: newBpSystolic,
          bpDiastolic: newBpDiastolic,
          temp: newTemp,
          spo2: newSpo2,
          glucose: newGlucose,
          notes: newNotes.trim(),
          text: vitalText
        }]
        // Sort by time
        updated.sort((a, b) => {
          const timeA = a.time.replace(':', '')
          const timeB = b.time.replace(':', '')
          return timeA.localeCompare(timeB)
        })
        onChange(updated)
        // Clear form
        setNewTime('')
        setNewPulse('')
        setNewRespRate('')
        setNewBpSystolic('')
        setNewBpDiastolic('')
        setNewTemp('')
        setNewSpo2('')
        setNewGlucose('')
        setNewNotes('')
      }
    }
  }

  const handleRemove = (index) => {
    const updated = vitals.filter((_, i) => i !== index)
    onChange(updated)
  }

  const hasVitalData = newPulse || newRespRate || (newBpSystolic && newBpDiastolic) || newTemp || newSpo2 || newGlucose || newNotes.trim()

  return (
    <div className="vitals-container">
      <div className="vitals-form">
        <div className="vitals-input-section">
          <div className="vitals-fields-grid">
            <div className="form-field">
              <label htmlFor="vital-time">Time</label>
              <TimeInput
                id="vital-time"
                value={newTime}
                onChange={setNewTime}
                placeholder="19:15"
              />
            </div>
            <div className="form-field">
              <label htmlFor="vital-pulse">Pulse (bpm)</label>
              <input
                type="number"
                id="vital-pulse"
                value={newPulse}
                onChange={(e) => setNewPulse(e.target.value)}
                min="0"
                placeholder="80"
              />
            </div>
            <div className="form-field">
              <label htmlFor="vital-respRate">RR (breaths/min)</label>
              <input
                type="number"
                id="vital-respRate"
                value={newRespRate}
                onChange={(e) => setNewRespRate(e.target.value)}
                min="0"
                placeholder="16"
              />
            </div>
            <div className="form-field">
              <label htmlFor="vital-bpSystolic">BP Systolic</label>
              <input
                type="number"
                id="vital-bpSystolic"
                value={newBpSystolic}
                onChange={(e) => setNewBpSystolic(e.target.value)}
                min="0"
                placeholder="120"
              />
            </div>
            <div className="form-field">
              <label htmlFor="vital-bpDiastolic">BP Diastolic</label>
              <input
                type="number"
                id="vital-bpDiastolic"
                value={newBpDiastolic}
                onChange={(e) => setNewBpDiastolic(e.target.value)}
                min="0"
                placeholder="80"
              />
            </div>
            <div className="form-field">
              <label htmlFor="vital-temp">Temp (°F)</label>
              <input
                type="number"
                id="vital-temp"
                value={newTemp}
                onChange={(e) => setNewTemp(e.target.value)}
                step="0.1"
                min="0"
                placeholder="98.6"
              />
            </div>
            <div className="form-field">
              <label htmlFor="vital-spo2">SpO2 (%)</label>
              <input
                type="number"
                id="vital-spo2"
                value={newSpo2}
                onChange={(e) => setNewSpo2(e.target.value)}
                min="0"
                max="100"
                placeholder="98"
              />
            </div>
            <div className="form-field">
              <label htmlFor="vital-glucose">Glucose (mg/dL)</label>
              <input
                type="number"
                id="vital-glucose"
                value={newGlucose}
                onChange={(e) => setNewGlucose(e.target.value)}
                min="0"
                placeholder="110"
              />
            </div>
          </div>
          <div className="form-field vitals-notes-field">
            <label htmlFor="vital-notes">Notes</label>
            <input
              type="text"
              id="vital-notes"
              value={newNotes}
              onChange={(e) => setNewNotes(e.target.value)}
              placeholder="e.g., Patient anxious, diaphoretic, complaining of chest pain"
            />
          </div>
          <div className="vitals-add-button">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAdd}
              disabled={!newTime || !hasVitalData}
            >
              <i className="fas fa-plus"></i> Add Vitals
            </button>
          </div>
        </div>
      </div>

      {vitals && vitals.length > 0 && (
        <div className="vitals-list">
          {vitals.map((vital, index) => (
            <div key={index} className="vital-item">
              <span className="vital-time">[{vital.time}]</span>
              <span className="vital-text">{vital.text}</span>
              <button
                type="button"
                className="btn-remove"
                onClick={() => handleRemove(index)}
                aria-label="Remove vitals"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Vitals
