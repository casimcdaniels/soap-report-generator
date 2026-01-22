// Format time for display (HHMM format)
export function formatTime(timeString) {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    return hours + minutes;
}

// Format date for display (full date format MM/DD/YYYY)
export function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

// Format time range
export function formatTimeRange(startTime, endTime) {
    if (!startTime || !endTime) return '';
    return `${formatTime(startTime)}-${formatTime(endTime)}`;
}

// Generate SOAP report
export function generateReport(formData) {
    const shiftTypeValue = formData.shiftType || 'ER';
    const shiftType = shiftTypeValue === 'EMT' ? 'Ride-Along' : shiftTypeValue;
    const date = formatDate(formData.date);
    const timeRange = formatTimeRange(formData.startTime, formData.endTime);
    const encounterTime = formatTime(formData.encounterTime);
    const age = formData.age || '';
    const gender = formData.gender || '';
    const chiefComplaint = formData.chiefComplaint || '';

    // SAMPLE History
    const symptoms = formData.symptoms || '';
    const allergies = formData.allergies || 'none';
    const medications = formData.medications || '';
    const pastHistory = formData.pastHistory || '';
    const lastOral = formData.lastOral || '';
    const events = formData.events || '';

    // OPQRST
    const onset = formData.onset || '';
    const provokes = formData.provokes || '';
    const quality = formData.quality || '';
    const radiation = formData.radiation || '';
    const severity = formData.severity || '';
    const time = formData.time || '';

    // Other sections
    const generalAssessment = formData.generalAssessment || '';
    const loc = formData.loc || '';
    const gcsEyes = formData.gcsEyes || '';
    const gcsVerbal = formData.gcsVerbal || '';
    const gcsMotor = formData.gcsMotor || '';
    const gcsTotal = formData.gcsTotal || '';
    const airway = formData.airway || '';
    const breathing = formData.breathing || '';
    const circulation = formData.circulation || '';
    const heent = formData.heent || '';
    const neck = formData.neck || '';
    const chest = formData.chest || '';
    const upperExtremities = formData.upperExtremities || '';
    const abdomen = formData.abdomen || '';
    const pelvis = formData.pelvis || '';
    const lowerExtremities = formData.lowerExtremities || '';
    const back = formData.back || '';
    const genitalia = formData.genitalia || '';
    const vitalTime = formatTime(formData.vitalTime) || encounterTime;
    const pulse = formData.pulse || '';
    const respRate = formData.respRate || '';
    const bpSystolic = formData.bpSystolic || '';
    const bpDiastolic = formData.bpDiastolic || '';
    const temp = formData.temp || '';
    const spo2 = formData.spo2 || '';
    const glucose = formData.glucose || '';
    const interventions = formData.interventions || '';
    const assessment = formData.assessment || '';
    const plan = formData.plan || '';

    // Build report
    let report = '';

    // Header line
    report += `${shiftType} ${date} ${timeRange}`;
    report += '\n';
    
    // Patient info below header
    if (encounterTime) {
        report += `Time: ${encounterTime}\n`;
    }
    if (age) {
        report += `Age: ${age}\n`;
    }
    if (gender) {
        report += `Sex: ${gender}\n`;
    }
    report += '\n';

    // SUBJECTIVE Section
    report += '-------- SUBJECTIVE ----------------------------------------\n';
    
    // Chief Complaint
    if (chiefComplaint) {
        report += `Chief Complaint: ${chiefComplaint}`;
    }
    
    // SAMPLE History
    const sampleParts = [];
    if (symptoms) sampleParts.push(`Signs / Symptoms: ${symptoms}`);
    if (allergies) sampleParts.push(`Allergies: ${allergies}`);
    if (medications) sampleParts.push(`Medications: ${medications}`);
    if (pastHistory) sampleParts.push(`Past Medical History: ${pastHistory}`);
    if (lastOral) sampleParts.push(`Last: ${lastOral}`);
    if (events) sampleParts.push(`Events: ${events}`);
    
    if (sampleParts.length > 0) {
        if (chiefComplaint) report += '\n\n';
        report += sampleParts.join('\n');
    }
    
    // OPQRST
    const opqrstParts = [];
    if (onset) opqrstParts.push(`Onset: ${onset}`);
    if (provokes) opqrstParts.push(`Provokes/Palliates: ${provokes}`);
    if (quality) opqrstParts.push(`Quality: ${quality}`);
    if (radiation) opqrstParts.push(`Radiation: ${radiation}`);
    if (severity) opqrstParts.push(`Severity: ${severity}/10`);
    if (time) opqrstParts.push(`Time: ${time}`);
    
    if (opqrstParts.length > 0) {
        if (chiefComplaint || sampleParts.length > 0) report += '\n\n';
        report += opqrstParts.join('\n');
    }
    
    // General Assessment
    if (generalAssessment) {
        if (chiefComplaint || sampleParts.length > 0 || opqrstParts.length > 0) report += '\n\n';
        report += generalAssessment;
    }
    
    report += '\n\n';

    // OBJECTIVE Section
    report += '-------- OBJECTIVE -----------------------------------------\n';
    
    // Physical Exam
    const physicalExamParts = [];
    if (loc) physicalExamParts.push(`LOC: ${loc}`);
    if (gcsTotal) {
      physicalExamParts.push(`GCS: ${gcsTotal}`);
    }
    if (airway) physicalExamParts.push(`Airway: ${airway}`);
    if (breathing) physicalExamParts.push(`Breathing: ${breathing}`);
    if (circulation) physicalExamParts.push(`Circulation: ${circulation}`);
    if (heent) physicalExamParts.push(`HEENT: ${heent}`);
    if (neck) physicalExamParts.push(`Neck: ${neck}`);
    if (chest) physicalExamParts.push(`Chest: ${chest}`);
    if (upperExtremities) physicalExamParts.push(`Upper Extremities: ${upperExtremities}`);
    if (abdomen) physicalExamParts.push(`Abdomen: ${abdomen}`);
    if (pelvis) physicalExamParts.push(`Pelvis: ${pelvis}`);
    if (lowerExtremities) physicalExamParts.push(`Lower Extremities: ${lowerExtremities}`);
    if (back) physicalExamParts.push(`Back: ${back}`);
    if (genitalia) physicalExamParts.push(`Genitalia/Buttocks: ${genitalia}`);
    
    if (physicalExamParts.length > 0) {
        report += physicalExamParts.join('\n');
    }
    
    // Vitals
    const vitalsParts = [];
    if (pulse) vitalsParts.push(`P ${pulse}`);
    if (respRate) vitalsParts.push(`RR ${respRate}`);
    if (bpSystolic && bpDiastolic) vitalsParts.push(`BP ${bpSystolic}/${bpDiastolic}`);
    if (temp) vitalsParts.push(`Temp ${temp}°F`);
    if (spo2) vitalsParts.push(`SpO2 ${spo2}%`);
    if (glucose) vitalsParts.push(`Glucose ${glucose} mg/dL`);
    
    if (vitalsParts.length > 0) {
        if (physicalExamParts.length > 0) report += '\n\n';
        report += `${vitalTime}: ${vitalsParts.join(', ')}`;
    }
    
    // Interventions
    if (interventions) {
        if (physicalExamParts.length > 0 || vitalsParts.length > 0) report += '\n\n';
        report += interventions;
    }
    
    report += '\n\n';

    // ASSESSMENT Section
    report += '-------- ASSESSMENT ----------------------------------------\n';
    if (assessment) {
        report += assessment;
    }
    report += '\n\n';

    // PLAN Section
    report += '-------- PLAN ----------------------------------------------\n';
    if (plan) {
        report += plan;
    }

    return report.trim();
}
