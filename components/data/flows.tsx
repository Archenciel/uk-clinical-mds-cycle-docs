export const initialNodes = [
  // Clinic Visit
  {
    id: '1',
    position: { x: 50, y: 50 },
    type: 'customNode',
    data: { 
      label: 'Patient Arrival and Registration',
      details: '<div> <b>Details:</b><br/> Patient provides personal and medical history, symptoms related to ADPKD. </div>'
    },
    style: { background: '#FFD580' }
  },
  {
    id: '2',
    position: { x: 50, y: 150 },
    type: 'customNode',
    data: {
      label: 'Initial Assessment by Healthcare Professional',
      details: '<b>Details:</b><br/> Physical examination and review of family history for ADPKD.'
    },
    style: { background: '#FFD580' }
  },
  {
    id: '3',
    position: { x: 50, y: 250 },
    type: 'customNode',
    data: {
      label: 'Laboratory Tests',
      details: '<b>Details:</b><br/> Blood tests for renal and liver function, urine analysis.'
    },
    style: { background: '#FFD580' }
  },
  {
    id: '4',
    position: { x: 50, y: 350 },
    type: 'customNode',
    data: {
      label: 'Imaging Studies',
      details: '<b>Details:</b><br/> Ultrasound, MRI, or CT scans to assess kidneys and cysts.'
    },
    style: { background: '#FFD580' }
  },
  {
    id: '5',
    position: { x: 50, y: 450 },
    type: 'customNode',
    data: {
      label: 'Genetic Counseling and Testing (if indicated)',
      details: '<b>Details:</b><br/> Assessing risk of ADPKD in family members, genetic testing if necessary.'
    },
    style: { border: '3px dashed #ff8c00', background: '#FFD599' }
  },

  // Treatment Decision
  {
    id: '6',
    position: { x: 50, y: 550 },
    type: 'customNode',
    data: {
      label: 'Consultation with Nephrologist on Results',
      details: '<b>Details:</b><br/> Discussion of test results, kidney function assessment, treatment options.'
    },
    style: { background: '#FFC0CB' }
  },
  {
    id: '7',
    position: { x: 350, y: 50 },
    type: 'customNode',
    data: {
      label: 'Treatment Planning',
      details: '<b>Details:</b></br> Developing a personalized treatment plan based on stage of kidney disease and overall health.'
    },
    style: { background: '#FFC0CB' }
  },

  // At Home
  {
    id: '8',
    position: { x: 350, y: 150 },
    type: 'customNode',
    data: {
      label: 'Management of Hypertension',
      details: '<b>Details:</b></br> Regular blood pressure monitoring, medications to control hypertension.'
    },
    style: { background: '#B7E9F7' }
  },
  {
    id: '9',
    position: { x: 350, y: 250 },
    type: 'customNode',
    data: {
      label: 'Symptom Management',
      details: '<b>Details:</b></br> Pain management, treatment of urinary tract infections, managing blood in urine.'
    },
    style: { background: '#B7E9F7' }
  },
  {
    id: '10',
    position: { x: 350, y: 350 },
    type: 'customNode',
    data: {
      label: 'Lifestyle Modifications',
      details: '<b>Details:</b></br> Dietary changes, increased water intake, and other lifestyle adjustments.'
    },
    style: { background: '#B7E9F7' }
  },
  {
    id: '11',
    position: { x: 350, y: 450 },
    type: 'customNode',
    data: {
      label: 'Medications Specific to ADPKD',
      details: '<b>Details:</b></br> Prescription of drugs like Tolvaptan, monitoring for side effects.'
    },
    style: { background: '#B7E9F7' }
  },
  {
    id: '12',
    position: { x: 350, y: 550 },
    type: 'customNode',
    data: {
      label: 'Regular Monitoring',
      details: '<b>Details:</b></br> Ongoing kidney function tests, periodic imaging studies.'
    },
    style: { background: '#B7E9F7' }
  },

  // Advanced Care
  {
    id: '13',
    position: { x: 650, y: 250 },
    type: 'customNode',
    data: {
      label: 'Management of Kidney Failure (if needed)',
      details: '<b>Details:</b></br> Dialysis, kidney transplant evaluation and planning.'
    },
    style: { border: '3px dashed #FF50CB', background: '#FFC0CB' }
  },
  {
    id: '14',
    position: { x: 650, y: 350 },
    type: 'customNode',
    data: {
      label: 'Ongoing Support and Counseling (if needed)',
      details: '<b>Details:</b></br> Psychological support, education about disease progression and management.'
    },
    style: { border: '3px dashed #FF50CB', background: '#FFC0CB' }
  },
  {
    id: '15',
    position: { x: 650, y: 450 },
    type: 'customNode',
    data: {
      label: 'Follow-up Visits (if needed)',
      details: '<b>Details:</b></br> Regular check-ups with the nephrologist, treatment adjustments as needed.'
    },
    style: { border: '3px dashed #FF50CB', background: '#FFC0CB' }
  },
];
