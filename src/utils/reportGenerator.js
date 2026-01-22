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
    const ageYears = formData.ageYears || '';
    const ageMonths = formData.ageMonths || '';
    const weight = formData.weight || '';
    const weightUnit = formData.weightUnit || 'lbs';
    const gender = formData.gender || '';
    
    // Format age display
    let ageDisplay = '';
    if (ageYears && ageMonths) {
        ageDisplay = `${ageYears}yo, ${ageMonths}mo`;
    } else if (ageYears) {
        ageDisplay = `${ageYears}yo`;
    } else if (ageMonths) {
        ageDisplay = `${ageMonths}mo`;
    }
    
    // Format weight display with conversion (always show kg first, then lbs)
    let weightDisplay = '';
    if (weight) {
        const weightValue = parseFloat(weight);
        if (!isNaN(weightValue)) {
            let kgValue, lbsValue;
            if (weightUnit === 'lbs') {
                kgValue = (weightValue / 2.20462).toFixed(1);
                lbsValue = weightValue.toFixed(1);
            } else {
                kgValue = weightValue.toFixed(1);
                lbsValue = (weightValue * 2.20462).toFixed(1);
            }
            weightDisplay = `${kgValue} kg (${lbsValue} lbs)`;
        } else {
            weightDisplay = `${weight} ${weightUnit}`;
        }
    }
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
    const vitals = formData.vitals || [];
    const interventions = formData.interventions || [];
    const assessment = formData.assessment || '';
    const plan = formData.plan || '';

    // Build report
    let report = '';

    // Header line
    report += `${shiftType} ${date} ${timeRange}`;
    report += '\n\n';
    
    // Patient info below header
    if (encounterTime) {
        report += `Time: ${encounterTime}\n`;
    }
    if (encounterTime && (ageDisplay || weightDisplay || gender)) {
        report += '\n';
    }
    if (ageDisplay) {
        report += `Age: ${ageDisplay}\n`;
    }
    if (weightDisplay) {
        report += `Weight: ${weightDisplay}\n`;
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
    
    // Vitals (display separately, stacked)
    if (vitals && vitals.length > 0) {
        if (physicalExamParts.length > 0) report += '\n\n';
        report += 'Vitals\n';
        const vitalsLines = vitals.map(vital => `[${vital.time}] - ${vital.text}`).join('\n');
        report += vitalsLines;
    }
    
    // Timeline (interventions + vitals taken entries)
    const timelineItems = []
    
    // Add vitals taken entries to timeline
    if (vitals && vitals.length > 0) {
        vitals.forEach(vital => {
            timelineItems.push({
                time: vital.time,
                text: 'Vitals taken'
            })
        })
    }
    
    // Add interventions to timeline
    if (interventions && interventions.length > 0) {
        interventions.forEach(intervention => {
            timelineItems.push({
                time: intervention.time,
                text: intervention.text
            })
        })
    }
    
    // Sort timeline by time and display
    if (timelineItems.length > 0) {
        timelineItems.sort((a, b) => {
            const timeA = a.time.replace(':', '')
            const timeB = b.time.replace(':', '')
            return timeA.localeCompare(timeB)
        })
        
        if (physicalExamParts.length > 0 || (vitals && vitals.length > 0)) report += '\n\n'
        report += 'Timeline\n'
        const timelineLines = timelineItems.map(item => `[${item.time}] - ${item.text}`).join('\n')
        report += timelineLines
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
