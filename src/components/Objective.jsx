import TimeInput from './TimeInput'
import GCSInput from './GCSInput'
import Vitals from './Vitals'
import Interventions from './Interventions'

function Objective({ formData, onChange }) {
  return (
    <>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="generalAssessment">General Impression</label>
          <textarea
            id="generalAssessment"
            value={formData.generalAssessment}
            onChange={(e) => onChange('generalAssessment', e.target.value)}
            rows="3"
            placeholder="e.g., 32-year-old female found on backboard with C-collar in place, zone 1, bed 3. Patient appears anxious, diaphoretic, alert and oriented x4, cooperative. Patient arrived via EMS"
          />
        </div>
      </div>
      <div className="form-group">
        <h2><i className="fas fa-user-md"></i> Physical Exam</h2>
        <div className="form-field">
          <label htmlFor="loc">LOC</label>
          <input
            type="text"
            id="loc"
            value={formData.loc}
            onChange={(e) => onChange('loc', e.target.value)}
            placeholder="e.g., Alert and oriented x4, GCS 15, no loss of consciousness"
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
            placeholder="e.g., Patent, clear, no obstructions. C-collar in place"
          />
        </div>
        <div className="form-field">
          <label htmlFor="breathing">Breathing</label>
          <input
            type="text"
            id="breathing"
            value={formData.breathing}
            onChange={(e) => onChange('breathing', e.target.value)}
            placeholder="e.g., Equal, adequate, bilateral chest rise. Slight tachypnea noted, patient reports SOB"
          />
        </div>
        <div className="form-field">
          <label htmlFor="circulation">Circulation</label>
          <input
            type="text"
            id="circulation"
            value={formData.circulation}
            onChange={(e) => onChange('circulation', e.target.value)}
            placeholder="e.g., Strong, regular radial pulse present bilaterally. Skin warm, pale, diaphoretic. Capillary refill less than 2 seconds"
          />
        </div>
        <div className="form-field">
          <label htmlFor="heent">HEENT</label>
          <input
            type="text"
            id="heent"
            value={formData.heent}
            onChange={(e) => onChange('heent', e.target.value)}
            placeholder="e.g., PERRL 4mm bilaterally, equal and reactive. No visual disturbances reported. No raccoon eyes or Battle's sign"
          />
        </div>
        <div className="form-field">
          <label htmlFor="neck">Neck</label>
          <input
            type="text"
            id="neck"
            value={formData.neck}
            onChange={(e) => onChange('neck', e.target.value)}
            placeholder="e.g., No JVD, trachea midline. C-collar in place. No step-off or crepitus palpated. Tender to palpation midline"
          />
        </div>
        <div className="form-field">
          <label htmlFor="chest">Chest</label>
          <input
            type="text"
            id="chest"
            value={formData.chest}
            onChange={(e) => onChange('chest', e.target.value)}
            placeholder="e.g., Lung sounds clear bilaterally, equal air entry. No wheezes, rales, or rhonchi. Chest wall tender to palpation"
          />
        </div>
        <div className="form-field">
          <label htmlFor="upperExtremities">Upper Extremities</label>
          <input
            type="text"
            id="upperExtremities"
            value={formData.upperExtremities}
            onChange={(e) => onChange('upperExtremities', e.target.value)}
            placeholder="e.g., Pulses, motor, and sensation intact bilaterally. Left arm tender to palpation, no obvious deformities. No lacerations or abrasions noted"
          />
        </div>
        <div className="form-field">
          <label htmlFor="abdomen">Abdomen</label>
          <input
            type="text"
            id="abdomen"
            value={formData.abdomen}
            onChange={(e) => onChange('abdomen', e.target.value)}
            placeholder="e.g., Soft, non-tender, non-distended. All quadrants negative for guarding, rigidity, or rebound. No seatbelt sign noted"
          />
        </div>
        <div className="form-field">
          <label htmlFor="pelvis">Pelvis</label>
          <input
            type="text"
            id="pelvis"
            value={formData.pelvis}
            onChange={(e) => onChange('pelvis', e.target.value)}
            placeholder="e.g., Stable, no crepitus, no incontinence. No pelvic instability noted"
          />
        </div>
        <div className="form-field">
          <label htmlFor="lowerExtremities">Lower Extremities</label>
          <input
            type="text"
            id="lowerExtremities"
            value={formData.lowerExtremities}
            onChange={(e) => onChange('lowerExtremities', e.target.value)}
            placeholder="e.g., Pulses, motor, and sensation intact bilaterally. No edema, no deformities. No pedal pulses checked due to backboard"
          />
        </div>
        <div className="form-field">
          <label htmlFor="back">Back</label>
          <input
            type="text"
            id="back"
            value={formData.back}
            onChange={(e) => onChange('back', e.target.value)}
            placeholder="e.g., No deformities, contusions, abrasions, penetrations, burns, tenderness, lacerations, or swelling. Patient log-rolled, no step-off palpated"
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
        <h2><i className="fas fa-clock"></i> Timeline</h2>
        <div className="timeline-section">
          <div className="timeline-subsection">
            <h3><i className="fas fa-heartbeat"></i> Vitals</h3>
            <Vitals
              vitals={formData.vitals}
              onChange={(value) => onChange('vitals', value)}
            />
          </div>
          <div className="timeline-subsection">
            <h3><i className="fas fa-procedures"></i> Interventions</h3>
            <Interventions
              interventions={formData.interventions}
              onChange={(value) => onChange('interventions', value)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Objective
