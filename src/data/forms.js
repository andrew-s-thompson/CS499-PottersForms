export const payload = {
  forms: [
    {
      formId: 'evsc',
      version: 1,
      title: 'Evansville Vanderburgh School Corporation Release Form',
      description: "This survey allows Potter's Wheel to work with EVSC in helping to improve grades, attendance, assignments, and scores.",
      anonymous: false,
      participantKeys: [],
      fields: [
        {
          key: 'header_1',
          label: 'Evansville Vanderburgh School Corporation\nCenter for Family, School, and Community Partnerships\nOffice of Student Support Services\n123 Main Street, Evansville, IN 47708\nTelephone (812) 435-8463\nFax (812) 435-8388\nRELEASE OF STUDENT INFORMATION FROM EVANSVILLE VANDERBURGH SCHOOL CORPORATION',
          type: 'label',
          required: false,
          options: [],
          exclude: false
        },
        {
          key: 'label_1',
          label: 'By completing below, I hereby authorize the Evansville Vanderburgh School Corporation to release the following records for educational purposes regarding my child.',
          type: 'label',
          required: false,
          options: [],
          exclude: false
        },
        {
          key: 'date',
          label: 'Date',
          type: 'date',
          required: true,
          options: [],
          exclude: false
        },
        {
          key: 'guardian_name',
          label: 'Name of Parent/Legal Guardian',
          type: 'text',
          required: true,
          options: [],
          exclude: false
        },
        {
          key: 'relationship',
          label: 'Relationship',
          type: 'text',
          required: true,
          options: [],
          exclude: false
        },
        {
          key: 'guardian_phone',
          label: 'Telephone',
          type: 'phone',
          required: true,
          options: [],
          exclude: false
        },
        {
          key: 'address',
          label: 'Address',
          type: 'text',
          required: true,
          options: [],
          exclude: false
        },
        {
          key: 'city',
          label: 'City',
          type: 'text',
          required: true,
          options: [],
          exclude: false
        },
        {
          key: 'state',
          label: 'State',
          type: 'text',
          required: true,
          options: [],
          exclude: false
        },
        {
          key: 'zip',
          label: 'Zip',
          type: 'text',
          required: true,
          options: [],
          exclude: false
        },
        {
          key: 'child_name',
          label: "Student's Name",
          type: 'text',
          required: true,
          options: [],
          exclude: false
        },
        {
          key: 'school',
          label: 'School',
          type: 'text',
          required: true,
          options: [],
          exclude: false
        },
        {
          key: 'label_2',
          label: "Student Records to be released\n1. First and Last Name\n2. School Attending\n3. Unexcused Absenses for Current Term\n4. Grades for Current Term\n5. Number of Missing Assignments for the Current Term\n6. Most Recent Year and Prior Year Test Scores\nto the following Agencies for the Programs my child attends and participates in, and for my child's teacher(s) to discuss my child's daily behaviors with:",
          type: 'label',
          required: false,
          options: [],
          exclude: false
        },
        {
          key: 'agency_1',
          label: 'Name of Agency',
          type: 'text',
          required: true,
          options: [],
          exclude: false
        },
        {
          key: 'program_1',
          label: 'Program Attending',
          type: 'text',
          required: true,
          options: [],
          exclude: false
        },
        {
          key: 'agency_2',
          label: 'Name of Agency',
          type: 'text',
          required: false,
          options: [],
          exclude: false
        },
        {
          key: 'program_2',
          label: 'Program Attending',
          type: 'text',
          required: false,
          options: [],
          exclude: false
        },
        {
          key: 'agency_3',
          label: 'Name of Agency',
          type: 'text',
          required: false,
          options: [],
          exclude: false
        },
        {
          key: 'program_3',
          label: 'Program Attending',
          type: 'text',
          required: false,
          options: [],
          exclude: false
        },
        {
          key: 'agency_4',
          label: 'Name of Agency',
          type: 'text',
          required: false,
          options: [],
          exclude: false
        },
        {
          key: 'program_4',
          label: 'Program Attending',
          type: 'text',
          required: false,
          options: [],
          exclude: false
        },
        {
          key: 'label_3',
          label: 'I understand this release will be good throughout the 2026-2027 school year, including summer school, only as to the above Programs; may be revoked or modified at any time upon my written request; and that any identifiable records may not be further released or disseminated by the Agency without my prior approval and written permission.',
          type: 'label',
          required: false,
          options: [],
          exclude: false
        },
        {
          key: 'guardian_signature',
          label: 'Signature of Parent/Legal Guardian',
          type: 'signature',
          required: true,
          options: [],
          exclude: false
        },
        {
          key: 'witness_signature',
          label: 'Witness Signature',
          type: 'signature',
          required: false,
          options: [],
          exclude: true
        }
      ],
      template: 'templates/form_evsc.pdf?v=e833f141c9'
    },
    {
      formId: 'testform',
      version: 1,
      title: 'Test Form',
      description: 'This is a test form',
      anonymous: true,
      participantKeys: [],
      fields: [
        {
          key: 'a',
          label: 'Question 1 (Text)',
          type: 'text',
          required: false,
          options: [],
          exclude: false
        },
        {
          key: 'b',
          label: 'Question 2 (Check)',
          type: 'boolean',
          required: false,
          options: [],
          exclude: false
        },
        {
          key: 'c',
          label: 'Question 3 (Date)',
          type: 'date',
          required: false,
          options: [],
          exclude: false
        }
      ]
    }
  ]
}