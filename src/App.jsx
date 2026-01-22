import { useState, useEffect } from 'react'
import ShiftInfo from './components/ShiftInfo'
import PatientInfo from './components/PatientInfo'
import Subjective from './components/Subjective'
import Objective from './components/Objective'
import Assessment from './components/Assessment'
import Plan from './components/Plan'
import Preview from './components/Preview'
import { generateReport } from './utils/reportGenerator'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('shift')
  const [formData, setFormData] = useState({
    shiftType: 'ER',
    date: new Date().toISOString().split('T')[0],
    startTime: '',
    endTime: '',
    encounterTime: '',
    age: '',
    gender: '',
    chiefComplaint: '',
    symptoms: '',
    allergies: '',
    medications: '',
    pastHistory: '',
    lastOral: '',
    events: '',
    onset: '',
    provokes: '',
    quality: '',
    radiation: '',
    severity: '',
    time: '',
    generalAssessment: '',
    physicalExam: '',
    vitalTime: '',
    pulse: '',
    respRate: '',
    bpSystolic: '',
    bpDiastolic: '',
    temp: '',
    spo2: '',
    glucose: '',
    interventions: '',
    assessment: '',
    plan: ''
  })

  const [report, setReport] = useState('')

  // Update report whenever formData changes
  useEffect(() => {
    const generatedReport = generateReport(formData)
    setReport(generatedReport)
  }, [formData])

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all form fields?')) {
      setFormData({
        shiftType: 'ER',
        date: new Date().toISOString().split('T')[0],
        startTime: '',
        endTime: '',
        encounterTime: '',
        age: '',
        gender: '',
        chiefComplaint: '',
        symptoms: '',
        allergies: '',
        medications: '',
        pastHistory: '',
        lastOral: '',
        events: '',
        onset: '',
        provokes: '',
        quality: '',
        radiation: '',
        severity: '',
        time: '',
        generalAssessment: '',
        physicalExam: '',
        vitalTime: '',
        pulse: '',
        respRate: '',
        bpSystolic: '',
        bpDiastolic: '',
        temp: '',
        spo2: '',
        glucose: '',
        interventions: '',
        assessment: '',
        plan: ''
      })
    }
  }

  const tabs = [
    { id: 'shift', label: 'Shift Info', color: '#6c757d' },
    { id: 'patient', label: 'Patient Info', color: '#003d82' },
    { id: 'subjective', label: 'Subjective', color: '#0066cc' },
    { id: 'objective', label: 'Objective', color: '#28a745' },
    { id: 'assessment', label: 'Assessment', color: '#ffc107' },
    { id: 'plan', label: 'Plan', color: '#dc3545' }
  ]

  return (
    <div className="container">
      <header>
        <h1>SOAP Report Generator</h1>
      </header>

      <div className="main-content">
        <div className="form-section">
          <div className="tabs-container">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  '--tab-color': tab.color,
                  backgroundColor: activeTab === tab.id ? tab.color : '#f0f0f0',
                  color: activeTab === tab.id ? 'white' : '#666'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === 'shift' && (
              <ShiftInfo formData={formData} onChange={handleChange} />
            )}
            {activeTab === 'patient' && (
              <PatientInfo formData={formData} onChange={handleChange} />
            )}
            {activeTab === 'subjective' && (
              <Subjective formData={formData} onChange={handleChange} />
            )}
            {activeTab === 'objective' && (
              <Objective formData={formData} onChange={handleChange} />
            )}
            {activeTab === 'assessment' && (
              <Assessment formData={formData} onChange={handleChange} />
            )}
            {activeTab === 'plan' && (
              <Plan formData={formData} onChange={handleChange} />
            )}
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={handleClear}>
              Clear Form
            </button>
          </div>
        </div>

        <Preview report={report} />
      </div>
    </div>
  )
}

export default App
