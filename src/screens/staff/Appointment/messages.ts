/*
 * addAppointment Screen messages
 */

export const scope = 'app.screen.addAppointment';

const messages = {
  hours: {
    scope: `${scope}.hours`,
    options: {
      defaultValue: 'hours',
    },
  },
  newAppointment: {
    scope: `${scope}.newAppointment`,
    options: {
      defaultValue: 'New Appointment',
    },
  },
  appointmentType: {
    scope: `${scope}.appointmentType`,
    options: {
      defaultValue: 'Appointment Type',
    },
  },
  services: {
    scope: `${scope}.services`,
    options: {
      defaultValue: 'Services',
    },
  },
  addAService: {
    scope: `${scope}.addAService`,
    options: {
      defaultValue: 'add a service',
    },
  },
  addAnotherService: {
    scope: `${scope}.addAnotherService`,
    options: {
      defaultValue: 'add another service',
    },
  },
  date: {
    scope: `${scope}.date`,
    options: {
      defaultValue: 'Date',
    },
  },
  startTime: {
    scope: `${scope}.startTime`,
    options: {
      defaultValue: 'Start time',
    },
  },
  duration: {
    scope: `${scope}.duration`,
    options: {
      defaultValue: 'Duration',
    },
  },
  packages: {
    scope: `${scope}.packages`,
    options: {
      defaultValue: 'Packages',
    },
  },
  memberships: {
    scope: `${scope}.memberships`,
    options: {
      defaultValue: 'Memberships',
    },
  },
  addService: {
    scope: `${scope}.addService`,
    options: {
      defaultValue: 'Add a service',
    },
  },
  staff: {
    scope: `${scope}.staff`,
    options: {
      defaultValue: 'Staff',
    },
  },
  selectStaff: {
    scope: `${scope}.selectStaff`,
    options: {
      defaultValue: 'Select Staff',
    },
  },
  status: {
    scope: `${scope}.status`,
    options: {
      defaultValue: 'Status',
    },
  },
  cancel: {
    scope: `${scope}.cancel`,
    options: {
      defaultValue: 'Cancel',
    },
  },
  save: {
    scope: `${scope}.save`,
    options: {
      defaultValue: 'Save',
    },
  },
  notes: {
    scope: `${scope}.notes`,
    options: {
      defaultValue: 'Notes',
    },
  },
  NotesOnlyVisibleToStaff: {
    scope: `${scope}.NotesOnlyVisibleToStaff`,
    options: {
      defaultValue: 'Notes visible to staff only',
    },
  },
  courses: {
    scope: `${scope}.courses`,
    options: {
      defaultValue: 'Packages',
    },
  },
  addACourse: {
    scope: `${scope}.addACourse`,
    options: {
      defaultValue: 'Add a package',
    },
  },
  addAnotherCourse: {
    scope: `${scope}.addAnotherCourse`,
    options: {
      defaultValue: 'Add another package',
    },
  },
  selectPrice: {
    scope: `${scope}.selectPrice`,
    options: {
      defaultValue: 'Select Price (Incl. Tax)',
    },
  },
  timeAlreadyBooked: {
    scope: `${scope}.timeAlreadyBooked`,
    options: {
      defaultValue: 'Time is already booked',
    },
  },
  nextAvailabeleTime: {
    scope: `${scope}.nextAvailabeleTime`,
    options: {
      defaultValue: 'The next available time is',
    },
  },
  likeToSet: {
    scope: `${scope}.likeToSet`,
    options: {
      defaultValue: 'Would you like to set the start time to it?',
    },
  },
  yes: {
    scope: `${scope}.yes`,
    options: {
      defaultValue: 'YES',
    },
  },
  no: {
    scope: `${scope}.no`,
    options: {
      defaultValue: 'NO',
    },
  },
  missingInput: {
    scope: `${scope}.missingInput`,
    options: {
      defaultValue:
        'Some inputs are missing. Make sure a user and service is selected.',
    },
  },
  addAppointmentSuccess: {
    scope: `${scope}.addAppointmentSuccess`,
    options: {
      defaultValue: 'Appointment Added Successfully.',
    },
  },
  updateAppointmentSuccess: {
    scope: `${scope}.updateAppointmentSuccess`,
    options: {
      defaultValue: 'Appointment Updated Successfully.',
    },
  },
  cancelAppointmentSuccess: {
    scope: `${scope}.cancelAppointmentSuccess`,
    options: {
      defaultValue: 'Appointment Cancelled Successfully.',
    },
  },
  cancelAppointment: {
    scope: `${scope}.cancelAppointment`,
    options: {
      defaultValue: 'Cancel Appointment',
    },
  },
};

export default messages;
