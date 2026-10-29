export const forms = [
  {
    id: 'evsc-grade-release',
    title: 'EVSC Grade Release',
    description: "Allow Potter's Wheel to view your student's grades so we can support them in tutoring.",
    category: 'Consent',
    fields: {
      field1: {
        type: 'input',
        label: 'Full Name:'
      },
      field2: {
        type: 'select',
        options: 'one, two, three',
        label: 'Select a number:'
      }
    }
  },
  {
    id: 'epn-consent',
    title: 'EPN Consent',
    description: 'Consent for your student to be included in Evansville Promise Neighborhood measurements.',
    category: 'Consent',
  },
  {
    id: 'program-signup',
    title: 'Program Sign-Up',
    description: "Sign up for Potter's Wheel programs for the upcoming season.",
    category: 'Registration',
  },
]