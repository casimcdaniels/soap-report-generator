import { useState } from 'react'
import TimeInput from './TimeInput'

function Interventions({ interventions, onChange }) {
  const [newTime, setNewTime] = useState('')
  const [newText, setNewText] = useState('')

  const handleAdd = () => {
    if (newTime && newText.trim()) {
      const updated = [...(interventions || []), { time: newTime, text: newText.trim() }]
      // Sort by time
      updated.sort((a, b) => {
        const timeA = a.time.replace(':', '')
        const timeB = b.time.replace(':', '')
        return timeA.localeCompare(timeB)
      })
      onChange(updated)
      setNewTime('')
      setNewText('')
    }
  }

  const handleRemove = (index) => {
    const updated = interventions.filter((_, i) => i !== index)
    onChange(updated)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleAdd()
    }
  }

  return (
    <div className="interventions-container">
      <div className="interventions-form">
        <div className="interventions-input-row">
          <div className="form-field interventions-time-field">
            <label htmlFor="intervention-time">Time</label>
            <TimeInput
              id="intervention-time"
              value={newTime}
              onChange={setNewTime}
              placeholder="19:20"
            />
          </div>
          <div className="form-field interventions-text-field">
            <label htmlFor="intervention-text">Intervention</label>
            <input
              type="text"
              id="intervention-text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="e.g., C-spine precautions maintained, backboard applied, C-collar placed, O2 via nasal cannula at 2L/min"
            />
          </div>
          <div className="interventions-add-button">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAdd}
              disabled={!newTime || !newText.trim()}
            >
              <i className="fas fa-plus"></i> Add
            </button>
          </div>
        </div>
      </div>

      {interventions && interventions.length > 0 && (
        <div className="interventions-list">
          {interventions.map((intervention, index) => (
            <div key={index} className="intervention-item">
              <span className="intervention-time">{intervention.time}</span>
              <span className="intervention-text">{intervention.text}</span>
              <button
                type="button"
                className="btn-remove"
                onClick={() => handleRemove(index)}
                aria-label="Remove intervention"
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

export default Interventions
