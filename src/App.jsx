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

const STORAGE_KEY = 'soap-report-form-data'
const TAB_STORAGE_KEY = 'soap-report-active-tab'

const getDefaultFormData = () => {
  // Get today's date in local timezone (not UTC) to avoid date shifts
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const localDate = `${year}-${month}-${day}`;
  
  return {
  shiftType: 'ER',
  date: localDate,
  startTime: '',
  endTime: '',
  encounterTime: '',
  age: '',
  ageYears: '',
  ageMonths: '',
  ageDays: '',
  weight: '',
  weightUnit: 'lbs',
  height: '',
  heightUnit: 'in',
  gender: '',
  chiefComplaint: '',
  symptoms: '',
  allergies: '',
  medications: '',
  pastHistory: '',
  last: '',
  events: '',
  onset: '',
  provokes: '',
  quality: '',
  radiation: '',
  severity: '',
  time: '',
  generalAssessment: '',
  loc: '',
  gcsEyes: '',
  gcsVerbal: '',
  gcsMotor: '',
  gcsTotal: '',
  neurological: '',
  airway: '',
  breathing: '',
  circulation: '',
  skin: '',
  heent: '',
  neck: '',
  chest: '',
  upperExtremities: '',
  abdomen: '',
  pelvis: '',
  lowerExtremities: '',
  back: '',
  genitalia: '',
  vitals: [],
  interventions: [],
  assessment: '',
  plan: ''
  };
}

function App() {
  // Load form data and active tab from localStorage on mount
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem(TAB_STORAGE_KEY)
    return savedTab || 'shift'
  })

  const [formData, setFormData] = useState(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY)
      if (savedData) {
        const parsed = JSON.parse(savedData)
        // Migrate old interventions string to array format
        if (parsed.interventions && typeof parsed.interventions === 'string') {
          parsed.interventions = []
        }
        // Ensure interventions is an array
        if (!Array.isArray(parsed.interventions)) {
          parsed.interventions = []
        }
        // Migrate old vitals fields to array format
        if (parsed.vitalTime || parsed.pulse || parsed.respRate || parsed.bpSystolic || parsed.bpDiastolic || parsed.temp || parsed.spo2 || parsed.glucose) {
          const vitalParts = []
          if (parsed.pulse) vitalParts.push(`P: ${parsed.pulse}`)
          if (parsed.respRate) vitalParts.push(`RR: ${parsed.respRate}`)
          if (parsed.bpSystolic && parsed.bpDiastolic) vitalParts.push(`BP: ${parsed.bpSystolic}/${parsed.bpDiastolic}`)
          if (parsed.temp) vitalParts.push(`Temp: ${parsed.temp}°F`)
          if (parsed.spo2) vitalParts.push(`SpO2: ${parsed.spo2}%`)
          if (parsed.glucose) vitalParts.push(`Glucose: ${parsed.glucose} mg/dL`)
          
          if (vitalParts.length > 0 && parsed.vitalTime) {
            parsed.vitals = [{
              time: parsed.vitalTime,
              type: 'vitals',
              pulse: parsed.pulse || '',
              respRate: parsed.respRate || '',
              bpSystolic: parsed.bpSystolic || '',
              bpDiastolic: parsed.bpDiastolic || '',
              temp: parsed.temp || '',
              spo2: parsed.spo2 || '',
              glucose: parsed.glucose || '',
              text: vitalParts.join(', ')
            }]
          } else {
            parsed.vitals = []
          }
          // Clean up old fields
          delete parsed.vitalTime
          delete parsed.pulse
          delete parsed.respRate
          delete parsed.bpSystolic
          delete parsed.bpDiastolic
          delete parsed.temp
          delete parsed.spo2
          delete parsed.glucose
        }
        // Ensure vitals is an array
        if (!Array.isArray(parsed.vitals)) {
          parsed.vitals = []
        }
        // Migrate old age field to ageYears
        if (parsed.age && !parsed.ageYears && !parsed.ageMonths) {
          parsed.ageYears = parsed.age
          delete parsed.age
        }
        // Ensure weightUnit has a default value
        if (!parsed.weightUnit) {
          parsed.weightUnit = 'lbs'
        }
        // Normalize date to YYYY-MM-DD format to avoid timezone issues
        if (parsed.date) {
          const dateStr = String(parsed.date).trim()
          // Extract date part from ISO string if present (e.g., "2024-01-15T00:00:00.000Z" -> "2024-01-15")
          // This prevents timezone conversion issues
          const isoMatch = dateStr.match(/^(\d{4}-\d{2}-\d{2})/)
          if (isoMatch) {
            parsed.date = isoMatch[1]
          } else if (!dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
            // If it's not already in YYYY-MM-DD format and not an ISO string,
            // use local date methods to avoid UTC timezone issues
            // Parse as local date to preserve the intended date
            const dateObj = new Date(dateStr + 'T12:00:00') // Use noon to avoid DST issues
            if (!isNaN(dateObj.getTime())) {
              const year = dateObj.getFullYear()
              const month = String(dateObj.getMonth() + 1).padStart(2, '0')
              const day = String(dateObj.getDate()).padStart(2, '0')
              parsed.date = `${year}-${month}-${day}`
            }
          }
        }
        // Merge with defaults to handle any missing fields
        return { ...getDefaultFormData(), ...parsed }
      }
    } catch (error) {
      console.error('Error loading form data from localStorage:', error)
    }
    return getDefaultFormData()
  })

  const [report, setReport] = useState('')

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    } catch (error) {
      console.error('Error saving form data to localStorage:', error)
    }
  }, [formData])

  // Save active tab to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(TAB_STORAGE_KEY, activeTab)
    } catch (error) {
      console.error('Error saving active tab to localStorage:', error)
    }
  }, [activeTab])

  // Update report whenever formData changes
  useEffect(() => {
    const generatedReport = generateReport(formData)
    setReport(generatedReport)
  }, [formData])

  // Reset scroll position when tab changes
  useEffect(() => {
    const tabContent = document.querySelector('.tab-content')
    if (tabContent) {
      tabContent.scrollTop = 0
    }
  }, [activeTab])

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNewPatient = () => {
    if (window.confirm('Are you sure you want to clear all form fields and start a new patient?')) {
      const defaultData = getDefaultFormData()
      // Preserve shift type, date, start time, and end time
      const preservedData = {
        shiftType: formData.shiftType,
        date: formData.date,
        startTime: formData.startTime,
        endTime: formData.endTime,
      }
      // Merge preserved data with defaults, ensuring encounterTime is cleared
      const newFormData = {
        ...defaultData,
        ...preservedData,
        encounterTime: '' // Explicitly clear encounter time
      }
      setFormData(newFormData)
      setActiveTab('shift')
      // Save to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newFormData))
        localStorage.setItem(TAB_STORAGE_KEY, 'shift')
      } catch (error) {
        console.error('Error saving to localStorage:', error)
      }
    }
  }

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all fields on this page? This cannot be undone.')) {
      const defaultData = getDefaultFormData()
      const fieldsToClear = {}
      
      // Define fields for each tab
      if (activeTab === 'shift') {
        fieldsToClear.shiftType = defaultData.shiftType
        fieldsToClear.date = defaultData.date
        fieldsToClear.startTime = ''
        fieldsToClear.endTime = ''
        fieldsToClear.encounterTime = ''
      } else if (activeTab === 'patient') {
        fieldsToClear.ageYears = ''
        fieldsToClear.ageMonths = ''
        fieldsToClear.ageDays = ''
        fieldsToClear.weight = ''
        fieldsToClear.weightUnit = defaultData.weightUnit
        fieldsToClear.height = ''
        fieldsToClear.heightUnit = defaultData.heightUnit
        fieldsToClear.gender = ''
      } else if (activeTab === 'subjective') {
        fieldsToClear.chiefComplaint = ''
        fieldsToClear.symptoms = ''
        fieldsToClear.allergies = ''
        fieldsToClear.medications = ''
        fieldsToClear.pastHistory = ''
        fieldsToClear.last = ''
        fieldsToClear.events = ''
        fieldsToClear.onset = ''
        fieldsToClear.provokes = ''
        fieldsToClear.quality = ''
        fieldsToClear.radiation = ''
        fieldsToClear.severity = ''
        fieldsToClear.time = ''
      } else if (activeTab === 'objective') {
        fieldsToClear.generalAssessment = ''
        fieldsToClear.loc = ''
        fieldsToClear.gcsEyes = ''
        fieldsToClear.gcsVerbal = ''
        fieldsToClear.gcsMotor = ''
        fieldsToClear.gcsTotal = ''
        fieldsToClear.neurological = ''
        fieldsToClear.airway = ''
        fieldsToClear.breathing = ''
        fieldsToClear.circulation = ''
        fieldsToClear.skin = ''
        fieldsToClear.heent = ''
        fieldsToClear.neck = ''
        fieldsToClear.chest = ''
        fieldsToClear.upperExtremities = ''
        fieldsToClear.abdomen = ''
        fieldsToClear.pelvis = ''
        fieldsToClear.lowerExtremities = ''
        fieldsToClear.back = ''
        fieldsToClear.genitalia = ''
        fieldsToClear.vitals = []
        fieldsToClear.interventions = []
      } else if (activeTab === 'assessment') {
        fieldsToClear.assessment = ''
      } else if (activeTab === 'plan') {
        fieldsToClear.plan = ''
      }
      
      setFormData(prev => ({
        ...prev,
        ...fieldsToClear
      }))
    }
  }

  const tabs = [
    { id: 'shift', label: 'Encounter', color: '#6c757d', icon: 'fa-calendar-alt' },
    { id: 'patient', label: 'Patient Info', color: '#003d82', icon: 'fa-user' },
    { id: 'subjective', label: 'Subjective', color: '#0066cc', icon: 'fa-comment-medical' },
    { id: 'objective', label: 'Objective', color: '#28a745', icon: 'fa-stethoscope' },
    { id: 'assessment', label: 'Assessment', color: '#ff9800', icon: 'fa-clipboard-check' },
    { id: 'plan', label: 'Plan', color: '#dc3545', icon: 'fa-tasks' }
  ]

  return (
    <div className="container">
      <header>
        <div className="header-content">
          <h1><i className="fas fa-file-medical"></i> SOAP Report Generator</h1>
          <button 
            type="button" 
            className="btn btn-new-patient" 
            onClick={handleNewPatient}
            title="Clear all fields and start a new patient"
          >
            <i className="fas fa-user-plus"></i> New Patient
          </button>
        </div>
      </header>

      <div className="main-content">
        <div className="form-section">
          <div className="tabs-container">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''} ${tab.id === 'shift' ? 'tab-encounter' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  '--tab-color': tab.color,
                  backgroundColor: activeTab === tab.id ? tab.color : '#f0f0f0',
                  color: activeTab === tab.id ? 'white' : '#666'
                }}
              >
                <i className={`fas ${tab.icon}`}></i> {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-content" data-tab={activeTab}>
            <button type="button" className="btn btn-clear-form" onClick={handleClear}>
              <i className="fas fa-eraser"></i> Clear
            </button>
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
        </div>
        <Preview report={report} />
      </div>
    </div>
  )
}

export default App
