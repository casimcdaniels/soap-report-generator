// Format time for display (HH:MM format)
export function formatTime(timeString) {
    if (!timeString) return '';
    const parts = timeString.split(':');
    const hours = parts[0];
    const minutes = parts[1];
    if (!hours || !minutes || minutes === undefined) return '';
    return `${hours}:${minutes}`;
}

// Format date for display (full date format MM/DD/YYYY)
export function formatDate(dateString) {
    if (!dateString) return '';
    
    // Convert to string and trim whitespace
    const trimmed = String(dateString).trim();
    
    // Extract date part from ISO string if present (e.g., "2024-01-15T00:00:00.000Z" -> "2024-01-15")
    // This prevents timezone conversion issues
    let datePart = trimmed;
    const isoMatch = trimmed.match(/^(\d{4}-\d{2}-\d{2})/);
    if (isoMatch) {
        datePart = isoMatch[1];
    }
    
    // Parse YYYY-MM-DD format directly to avoid timezone issues
    // HTML date inputs always return YYYY-MM-DD format
    // Example: "2024-01-15" -> "01/15/2024"
    const dateMatch = datePart.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (dateMatch) {
        const year = dateMatch[1];   // e.g., "2024"
        const month = dateMatch[2]; // e.g., "01"
        const day = dateMatch[3];   // e.g., "15"
        // Return MM/DD/YYYY format
        return `${month}/${day}/${year}`;
    }
    
    // If it's not in YYYY-MM-DD format, try to parse it as-is
    // This handles edge cases where the date might already be formatted
    return trimmed;
}

// Format time range
export function formatTimeRange(startTime, endTime) {
    if (!startTime || !endTime) return '';
    const start = formatTime(startTime);
    const end = formatTime(endTime);
    if (!start || !end) return '';
    return `${start}-${end}`;
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
    const ageDays = formData.ageDays || '';
    const weight = formData.weight || '';
    const weightUnit = formData.weightUnit || 'lbs';
    const height = formData.height || '';
    const heightUnit = formData.heightUnit || 'in';
    const gender = formData.gender || '';
    
    // Format age display
    let ageDisplay = '';
    const ageParts = [];
    if (ageYears) ageParts.push(`${ageYears}y`);
    if (ageMonths) ageParts.push(`${ageMonths}mo`);
    if (ageDays) ageParts.push(`${ageDays}d`);
    
    if (ageParts.length > 0) {
        ageDisplay = ageParts.join(' ');
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
    
    // Format height display with conversion (always show cm first, then inches)
    let heightDisplay = '';
    if (height) {
        const heightValue = parseFloat(height);
        if (!isNaN(heightValue)) {
            let inValue, cmValue;
            if (heightUnit === 'cm') {
                cmValue = heightValue.toFixed(1);
                inValue = (heightValue / 2.54).toFixed(1);
            } else { // heightUnit === 'in'
                inValue = heightValue.toFixed(1);
                cmValue = (heightValue * 2.54).toFixed(1);
            }
            heightDisplay = `${cmValue} cm (${inValue} in)`;
        } else {
            heightDisplay = `${height} ${heightUnit}`;
        }
    }
    
    const chiefComplaint = formData.chiefComplaint || '';

    // SAMPLE History
    const symptoms = formData.symptoms || '';
    const allergies = formData.allergies || '';
    const medications = formData.medications || '';
    const pastHistory = formData.pastHistory || '';
    const last = formData.last || '';
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
    const skin = formData.skin || '';
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
    report += `${shiftType} ${date}`;
    if (timeRange !== undefined && timeRange !== null && timeRange !== '') {
        report += ` ${timeRange}`;
    }
    report += '\n------------------------';
    report += '\n\n';
    
    // Patient info below header
    if (encounterTime !== undefined && encounterTime !== null && encounterTime !== '') {
        report += `Time: ${encounterTime}\n`;
        if (ageDisplay || weightDisplay || heightDisplay || gender) {
            report += '\n';
        }
    }
    if (ageDisplay) {
        report += `Age: ${ageDisplay}\n`;
    }
    if (gender) {
        report += `Sex: ${gender}\n`;
    }
    if (weightDisplay) {
        report += `Weight: ${weightDisplay}\n`;
    }
    if (heightDisplay) {
        report += `Height: ${heightDisplay}\n`;
    }
    report += '\n';

    // SUBJECTIVE Section
    report += 'Subjective\n';
    report += '------------------------\n';
    
    // Chief Complaint
    if (chiefComplaint) {
        report += `Chief Complaint: ${chiefComplaint}`;
    }
    
    // SAMPLE History
    const sampleParts = [];
    if (symptoms && symptoms.trim()) sampleParts.push(`Symptoms: ${symptoms}`);
    if (allergies && allergies.trim()) sampleParts.push(`Allergies: ${allergies}`);
    if (medications && medications.trim()) sampleParts.push(`Medications: ${medications}`);
    if (pastHistory && pastHistory.trim()) sampleParts.push(`Pertinent Medical History: ${pastHistory}`);
    if (last && last.trim()) sampleParts.push(`Last: ${last}`);
    if (events && events.trim()) sampleParts.push(`Events: ${events}`);
    
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
    if (time !== undefined && time !== null && time !== '') opqrstParts.push(`Time: ${time}`);
    
    if (opqrstParts.length > 0) {
        if (chiefComplaint || sampleParts.length > 0) report += '\n\n';
        report += opqrstParts.join('\n');
    }
    
    report += '\n\n';

    // OBJECTIVE Section
    report += 'Objective\n';
    report += '------------------------\n';
    
    // General Impression (moved from Subjective)
    if (generalAssessment) {
        report += generalAssessment;
    }
    
    // Physical Exam
    const physicalExamParts = [];
    if (generalAssessment && (loc || gcsTotal || airway || breathing || circulation || skin || heent || neck || chest || upperExtremities || abdomen || pelvis || lowerExtremities || back || genitalia)) {
        report += '\n\n';
    }
    if (loc) physicalExamParts.push(`LOC: ${loc}`);
    if (gcsTotal) {
      physicalExamParts.push(`GCS: ${gcsTotal}`);
    }
    if (airway) physicalExamParts.push(`Airway: ${airway}`);
    if (breathing) physicalExamParts.push(`Breathing: ${breathing}`);
    if (circulation) physicalExamParts.push(`Circulation: ${circulation}`);
    if (skin) physicalExamParts.push(`Skin: ${skin}`);
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
    report += 'Assessment\n';
    report += '------------------------\n';
    if (assessment) {
        report += assessment;
    }
    report += '\n\n';

    // PLAN Section
    report += 'Plan\n';
    report += '------------------------\n';
    if (plan) {
        report += plan;
    }

    return report.trim();
}
