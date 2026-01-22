import TimeInput from './TimeInput'
import GCSInput from './GCSInput'

function Objective({ formData, onChange }) {
  return (
    <>
      <div className="form-group">
        <h2>Physical Exam</h2>
        <div className="form-field">
          <label htmlFor="loc">LOC</label>
          <input
            type="text"
            id="loc"
            value={formData.loc}
            onChange={(e) => onChange('loc', e.target.value)}
            placeholder="e.g., pt was aox4"
          />
        </div>
        <div className="form-field">
          <label htmlFor="gcsEyes">GCS</label>
          <GCSInput formData={formData} onChange={onChange} />
        </div>
        <div className="form-field">
          <label htmlFor="airway">Airway</label>
          <input
            type="text"
            id="airway"
            value={formData.airway}
            onChange={(e) => onChange('airway', e.target.value)}
            placeholder="e.g., PATENT OR OCCLUDED WITH EMESIS"
          />
        </div>
        <div className="form-field">
          <label htmlFor="breathing">Breathing</label>
          <input
            type="text"
            id="breathing"
            value={formData.breathing}
            onChange={(e) => onChange('breathing', e.target.value)}
            placeholder="e.g., NOTED EQUAL, ADEQUATE, BILATERAL CHEST RISE"
          />
        </div>
        <div className="form-field">
          <label htmlFor="circulation">Circulation</label>
          <input
            type="text"
            id="circulation"
            value={formData.circulation}
            onChange={(e) => onChange('circulation', e.target.value)}
            placeholder="e.g., STRONG, REGULAR RADIAL PULSE PRESENT. SKIN WAS WARM, PINK, DRY"
          />
        </div>
        <div className="form-field">
          <label htmlFor="heent">HEENT</label>
          <input
            type="text"
            id="heent"
            value={formData.heent}
            onChange={(e) => onChange('heent', e.target.value)}
            placeholder="e.g., PERRL AT 5MM OR NOTED CREPITUS TO THE RIGHT ORBITAL REGION"
          />
        </div>
        <div className="form-field">
          <label htmlFor="neck">Neck</label>
          <input
            type="text"
            id="neck"
            value={formData.neck}
            onChange={(e) => onChange('neck', e.target.value)}
            placeholder="e.g., NEGATIVE JVD, TRACHEA MIDLINE"
          />
        </div>
        <div className="form-field">
          <label htmlFor="chest">Chest</label>
          <input
            type="text"
            id="chest"
            value={formData.chest}
            onChange={(e) => onChange('chest', e.target.value)}
            placeholder="e.g., LUNG SOUNDS CLEAR BILATERALLY"
          />
        </div>
        <div className="form-field">
          <label htmlFor="upperExtremities">Upper Extremities</label>
          <input
            type="text"
            id="upperExtremities"
            value={formData.upperExtremities}
            onChange={(e) => onChange('upperExtremities', e.target.value)}
            placeholder="e.g., PMS INTACT BILATERALLY"
          />
        </div>
        <div className="form-field">
          <label htmlFor="abdomen">Abdomen</label>
          <input
            type="text"
            id="abdomen"
            value={formData.abdomen}
            onChange={(e) => onChange('abdomen', e.target.value)}
            placeholder="e.g., ALL QUADRANTS NEGATIVE FOR GRD"
          />
        </div>
        <div className="form-field">
          <label htmlFor="pelvis">Pelvis</label>
          <input
            type="text"
            id="pelvis"
            value={formData.pelvis}
            onChange={(e) => onChange('pelvis', e.target.value)}
            placeholder="e.g., NO INCONTINENCE NOTED"
          />
        </div>
        <div className="form-field">
          <label htmlFor="lowerExtremities">Lower Extremities</label>
          <input
            type="text"
            id="lowerExtremities"
            value={formData.lowerExtremities}
            onChange={(e) => onChange('lowerExtremities', e.target.value)}
            placeholder="e.g., PMS INTACT BILATERALLY"
          />
        </div>
        <div className="form-field">
          <label htmlFor="back">Back</label>
          <input
            type="text"
            id="back"
            value={formData.back}
            onChange={(e) => onChange('back', e.target.value)}
            placeholder="e.g., NO DCATPBTLS PRESENT"
          />
        </div>
        <div className="form-field">
          <label htmlFor="genitalia">Genitalia/Buttocks</label>
          <input
            type="text"
            id="genitalia"
            value={formData.genitalia}
            onChange={(e) => onChange('genitalia', e.target.value)}
            placeholder="e.g., Not assessed, no pt complaint"
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
