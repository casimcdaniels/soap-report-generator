import TimeInput from './TimeInput'
import GCSInput from './GCSInput'
import Vitals from './Vitals'
import Interventions from './Interventions'

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
        <h2>Timeline</h2>
        <div className="timeline-section">
          <div className="timeline-subsection">
            <h3>Vitals</h3>
            <Vitals
              vitals={formData.vitals}
              onChange={(value) => onChange('vitals', value)}
            />
          </div>
          <div className="timeline-subsection">
            <h3>Interventions</h3>
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
